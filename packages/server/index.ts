import dotenv from 'dotenv'
import cors from 'cors'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'
import { initState } from './store'

dotenv.config()

import * as fs from 'fs'
import { resolve, dirname } from 'path'
import express from 'express'
import { createClientAndConnect } from './db';
import { initControllers } from './controllers/init';

const isDev = () => process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001
  app.use(express.json())
  await createClientAndConnect();

  let vite: ViteDevServer | undefined
  const distPath = dirname(require.resolve('client/dist/index.html'))
  const srcPath = dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs')

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })

    app.use(vite.middlewares)
  }

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  if (!isDev()) {
    app.use('/assets', express.static(resolve(distPath, 'assets')))
  }

  app.use(initControllers());

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        resolve(!isDev() ? distPath : srcPath, 'index.html'),
        'utf-8',
      )

      if (isDev()) {
        template = await vite!.transformIndexHtml(url, template)
      }

      let render

      if (!isDev()) {
        render = (await import(ssrClientPath)).render
      } else {
        render = (await vite!.ssrLoadModule(resolve(srcPath, 'ssr.tsx'))).render
      }

      const state = initState()
      const stateMarkup = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
        state,
      ).replace(/</g, '\\u003c')}</script>`

      const appHtml = await render(req, res)

      const html = template.replace(`<!--ssr-outlet-->`, appHtml + stateMarkup)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
