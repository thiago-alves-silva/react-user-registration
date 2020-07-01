import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        {localStorage._id ? <Welcome /> : <Login />}
      </Route>
      <Route path="/Register">
        {localStorage._id ? <Redirect to="/"/> : <Register />}
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes;