import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePageComponent/HomePage';
import Login from './containers/LoginContainer/Login';
import Members from './containers/MembersListContainer/MembersList';
// import Account from './containers/AccountContainer/AccountPage';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login-form"   component={Login}  />
    <Route path="/members" component={Members} />
    {/* <Route path="/accounts"  component={Account}  /> */}
  </Route>
);

export default routes;
