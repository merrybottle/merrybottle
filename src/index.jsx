import React from 'react';
import ReactDOM from 'react-dom';
import MerryBottle from './components/MerryBottle';
import './globalStyled';

ReactDOM.render(
  <MerryBottle />,
  document.getElementById('app')
);

module.hot.accept();
