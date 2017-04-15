import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import App from './App';
import withUrlProps from './withUrlProps';
import './index.css';

const AppRoute = withUrlProps(App);

ReactDOM.render(
  <Router>
    <Route path="/" component={AppRoute}/>
  </Router>,
  document.getElementById('root')
);
