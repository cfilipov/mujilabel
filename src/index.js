import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Muji from './Muji';
import withUrlProps from './withUrlProps';
import './index.css';

const MujiRoute = withUrlProps(Muji);

ReactDOM.render(
  <Router>
    <Route path="/" component={MujiRoute}/>
  </Router>,
  document.getElementById('root')
);
