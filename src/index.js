import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from './App';
import ItemView from './ItemView';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/:sub" component={ItemView}></Route>
    </Route>
  </Router>
), document.getElementById('root'));
