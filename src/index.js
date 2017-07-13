"use strict";

import './scss/style.scss';
import './index.html';

import React  from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3 className="heading">Hello World!</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);