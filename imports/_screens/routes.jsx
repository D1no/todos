import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from './AppContainer.jsx';
import ListContainer from './lists/ListsContainer.jsx';
import SignIn from './signin/SignIn.jsx';
import Join from './join/Join.jsx';
import _notFound from './_shared/_notFound.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="lists/:id" component={ListContainer}/>
      <Route path="signin" component={SignIn}/>
      <Route path="join" component={Join}/>
      <Route path="*" component={_notFound}/>
    </Route>
  </Router>
);
