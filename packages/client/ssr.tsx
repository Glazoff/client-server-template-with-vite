import React from 'react';
import { Request, Response } from 'express';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { renderToString } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';
import { routersSsr } from './src/App/Router/routersSsr';
import './src/styles/index.scss';
import { createFetchRequest } from './src/App/Router/SsrRoute';
import { muiTheme } from './src/libs/theme';
import store from './src/store';
// import LiderBoard from './src/pages/LiderBoard';

export async function render(request: Request, response: Response) {
  const { query, dataRoutes } = createStaticHandler(routersSsr);
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
}

/* export function render() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
        </ThemeProvider>
      </Provider>
      <LiderBoard />
    </React.StrictMode>
  )
} */
