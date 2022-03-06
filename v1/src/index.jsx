import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import MerryBottle from './components/MerryBottle';
import theme from './globalStyled/theme';
import './globalStyled';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MerryBottle />
  </ThemeProvider>,
  document.getElementById('app')
);

module.hot.accept();
