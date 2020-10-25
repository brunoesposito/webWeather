import React from 'react';
import ReactDOM from 'react-dom';

import {ThemeProvider} from 'styled-components';
import GlobalStyle from './Styles/global';
import theme from './Themes';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
