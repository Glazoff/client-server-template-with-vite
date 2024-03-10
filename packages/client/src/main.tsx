import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import '../src/styles/index.scss';
import { isServiceWorker } from './shared/serviceWorker';
import store from './store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={store.getState().theme.theme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

isServiceWorker('/settingServerWorker.ts');
