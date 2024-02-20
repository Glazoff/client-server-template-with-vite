import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { routesSsr } from './src/App/Router/routersSsr';
import './src/styles/index.scss';
import { muiTheme } from './src/libs/theme';
import store from './src/store';

/* export async function render(request: Request, response: Response) {
  const { query, dataRoutes } = createStaticHandler(routesSsr);
  const remixRequest = createFetchRequest(request, response);
  const context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);

  return renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
} */

import type * as express from "express";
import * as React from "react";
import ReactDOMServer from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";

export async function render(
  request: express.Request,
  response: express.Response
) {
  let { query, dataRoutes } = createStaticHandler(routesSsr);
  let remixRequest = createFetchRequest(request, response);
  let context = await query(remixRequest);

  if (context instanceof Response) {
    throw context;
  }

  let router = createStaticRouter(dataRoutes, context);
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}

export function createFetchRequest(
  req: express.Request,
  res: express.Response
): Request {
  let origin = `${req.protocol!}://${req.get("host")}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(req.originalUrl || req.url, origin);

  let controller = new AbortController();
  res.on("close", () => controller.abort());

  let headers = new Headers();

  for (let [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  let init: RequestInit = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }

  return new Request(url.href, init);
}