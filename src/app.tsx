import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Welcome } from './welcome';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/home">
        home
        <Link to="/">back</Link>
      </Route>
    </Switch>
  </Router>
);