import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM, { render } from 'react-dom'; // 渲染组件时需要
import App from './components/Main';
import { Router,Route,hashHistory } from 'react-router';
import Main from './components/Main'

render((
  <Router history={hashHistory}>
    <Route path="/main" component={Main}/>
  </Router>
),document.getElementById('app'));

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
