import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM, { render } from 'react-dom'; // 渲染组件时需要
//import App from './components/Main';
//import { Router,Route,hashHistory } from 'react-router';
//import Main from './components/Main'
import { Provider } from 'react-redux';
import store from './redux/stores/store.jsx'
import route from './router/route.jsx'

// babel本身只能转换ES6语法，但ES6新增的Map、Set、Generator等新功能不会转换，所以需要此插件
import 'babel-polyfill';


render(
  <Provider store={store}>
    {route}
  </Provider>,
  document.getElementById('app')
)

//render((
//  <Router history={hashHistory}>
//    <Route path="/main" component={Main}/>
//  </Router>
//),document.getElementById('app'));

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
