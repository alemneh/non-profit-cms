import React from 'react';
import { browserHistory } from 'react-router';
import { ADD_USER_FULFILLED, LOGIN_FULFILLED, LOGOUT, SET_ACTIVE_USER } from '../ActionConstants';

export default store => next => action => {
  console.log(action.type);
  if( action.type === LOGOUT) {
    browserHistory.push('/login-form');
  } else if( action.type === LOGIN_FULFILLED ) {
    browserHistory.push('/');
  } else if (action.type === ADD_USER_FULFILLED) {
    browserHistory.push('/members-list');
  } else if (action.type === SET_ACTIVE_USER) {
    browserHistory.push('/profile');
  }

  next(action);
};
