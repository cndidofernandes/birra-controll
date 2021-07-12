import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import themeApp from './ThemeApp';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <>
  <CssBaseline />
  <ThemeProvider theme={themeApp}>
    <App />
  </ThemeProvider>
  </>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
