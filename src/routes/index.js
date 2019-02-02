import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import Rql from './Rql';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reduxQL" component={Rql} />
    </Switch>
  </BrowserRouter>
);
