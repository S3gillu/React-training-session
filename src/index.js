import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import PoppinsRegular from 'typeface-poppins';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const poppins = {
  fontFamily: 'Poppins',
  // fontDisplay: 'swap',
  src: `
    url(${PoppinsRegular}) format('ttf')
  `,
};

const theme = createMuiTheme({
  typography: {
      fontFamily: 'poppins',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [poppins],
        },
      },
  },
  palette: {
      primary: {
          main: '#363793',
      }
  }
})

ReactDOM.render(
  <React.StrictMode> 
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

