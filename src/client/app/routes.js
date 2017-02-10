import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './components/HomePageComponent/HomePage';
import Login from './containers/LoginContainer/Login';
import MemberPage from './components/MemberPageComponent/MemberPage';
import MembersList from './containers/MembersListContainer/MembersList';
import AddMemberPage from './containers/AddMemberContainer/AddMember';
// import Account from './containers/AccountContainer/AccountPage';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login-form"   component={Login}  />
    <Route path="/members" component={MemberPage} />
    <Route path="/members-list" component={MembersList} />
    <Route path="/add-member"  component={AddMemberPage} />

    {/* <Route path="/accounts"  component={Account}  /> */}
  </Route>
);

export default routes;
