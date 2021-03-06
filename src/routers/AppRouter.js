import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import IndecisionApp from '../components/indecision/IndecisionApp';
import ExpensifyApp from '../components/expensify/ExpensifyApp';
import AddExpensePage from '../components/expensify/AddExpensePage'
import EditExpensePage from '../components/expensify/EditExpensePage'
import SimpleSlider from '../components/gallery/SimpleSlider';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/indecision" component={IndecisionApp} />
        <PrivateRoute path="/gallery" component={SimpleSlider} />
        <PrivateRoute path="/expensify" component={ExpensifyApp} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
