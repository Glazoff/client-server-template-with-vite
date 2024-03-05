import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import '../src/styles/index.scss';
import { muiTheme } from './libs/theme';
import { isServiceWorker } from './shared/serviceWorker';
import { createStore } from './store';
import { LeaderboardStateType } from './store/liderboard/liderboardSlice';
import { User } from './store/user/userSlice';

const SSRState = window.__PRELOADED_STATE__;

const state = createStore(SSRState as { leaderboard: LeaderboardStateType; user: User } | object);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={state}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

isServiceWorker('/settingServerWorker.ts');
