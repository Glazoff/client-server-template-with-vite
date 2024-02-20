/* import dotenv from 'dotenv'
import cors from 'cors'
import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';

dotenv.config()

import express from 'express'
import * as fs from 'fs'
import * as path from 'path'

const isDev = () => process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  let vite: ViteDevServer | undefined;
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs')

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom'
    })

    app.use(vite.middlewares)
  }

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })


  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8',
        )
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8',
        )

        template = await vite!.transformIndexHtml(url, template)

      }

      let render: () => Promise<string>;

      if (!isDev()) {
        render = (await import(ssrClientPath)).render;
      } else {
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))).render;
      }

      const appHtml = await render()

      const html = template.replace(`<!--ssr-outlet-->`, appHtml || '')

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer(); */

import path from "path";
import fsp from "fs/promises";
import express, { Request, Response } from "express";
import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';

let isProduction = process.env.NODE_ENV === "production";
const port = Number(process.env.SERVER_PORT) || 3001;

async function createServer() {
  let app = express();
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs')
  /**
   * @type {import('vite').ViteDevServer}
  */
  let vite: ViteDevServer | undefined;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom'
    })

    app.use(vite!.middlewares);
  } else {
    app.use(require("compression")());
    app.use(express.static(path.resolve("dist/client")));
  }

  if (!isProduction) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use("*", async (req: Request, res: Response) => {
    let url = req.originalUrl;

    try {
      let template;
      let render;

      if (!isProduction) {
        template = await fsp.readFile(path.resolve(distPath, "index.html"), "utf8");
        template = await vite!.transformIndexHtml(url, template);
        render = (await import(ssrClientPath)).render;
      } else {
        template = await fsp.readFile(
          path.resolve(srcPath, "index.html"),
          "utf8"
        );
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))).render;
      }

      try {
        let appHtml = await render(req, res);
        let html = template.replace("<!--ssr-outlet-->", appHtml || '');
        res.setHeader("Content-Type", "text/html");
        return res.status(200).end(html);
      } catch (e) {
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(+(e.headers.get("Location"))!, e.status.toString());
        }
        throw e;
      }
    } catch (error) {
      if (!isProduction) {
        vite!.ssrFixStacktrace(error as Error);
      }
      console.log((error as Error).stack);
      res.status(500).end((error as Error).stack);
    }
  });

  return app;
}

createServer().then((app) => {
  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
});
