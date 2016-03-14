import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from './containers/AppContainer.jsx';
import ListContainer from './containers/ListContainer.jsx';
import AuthPageSignIn from './_screens/AuthPageSignIn.jsx';
import AuthPageJoin from './_screens/AuthPageJoin.jsx';
import NotFoundPage from './_screens/NotFoundPage.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="lists/:id" component={ListContainer}/>
      <Route path="signin" component={AuthPageSignIn}/>
      <Route path="join" component={AuthPageJoin}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
