"use strict";

import './scss/style.scss';
import './index.html';

import React  from 'react';
import ReactDOM from 'react-dom';

//Components
import App from './js/app';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);