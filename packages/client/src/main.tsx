import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import '../src/styles/index.scss';
import { muiTheme } from './libs/theme';
import { isServiceWorker } from './shared/serviceWorker';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// isServiceWorker('/settingServerWorker.ts');
