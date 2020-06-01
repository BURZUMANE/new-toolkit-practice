import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import NewsList from './components/newsList/NewsList';
import SingleNewsItem from './components/singleNewsItem/SingleNewsItem';
import Profile from './components/profile/Profile';

export const useRoute = (isAuthentication) => {
  if (!isAuthentication) {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={NewsList}></Route>
      <Route path="/profile" component={Profile} />
      <Route path="/news/:id" component={SingleNewsItem}></Route>
      <Redirect to="/" />
    </Switch>
  );
};
