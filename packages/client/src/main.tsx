import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import '../src/styles/index.scss';
import { muiTheme, darkTheme } from './libs/theme';
import { isServiceWorker } from './shared/serviceWorker';
import { createStore, useAppSelector } from './store';
import { LeaderboardStateType } from './store/liderboard/liderboardSlice';
import { User } from './store/user/userSlice';

const SSRState = window.__PRELOADED_STATE__;

const state = createStore(SSRState as { leaderboard: LeaderboardStateType; user: User } | object);

delete window.__PRELOADED_STATE__;

// eslint-disable-next-line react/display-name
const ThemeMUIWith = (WrapperComponent: React.ComponentType) => () => {
  const modeStr = useAppSelector((state) => state.mode.mode);
  const theme = modeStr === 'dark' ? darkTheme : muiTheme;
  return (
    <ThemeProvider theme={theme}>
      <WrapperComponent />
    </ThemeProvider>
  );
};

const WrapperThemeMUI = ThemeMUIWith(App);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={state}>
      <WrapperThemeMUI />
    </Provider>
  </React.StrictMode>
);

isServiceWorker('/settingServerWorker.ts');
