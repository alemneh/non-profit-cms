import React from 'react';
import { browserHistory } from 'react-router';
import { SIGN_UP_FULFILLED, LOGIN_FULFILLED, LOGOUT } from '../ActionConstants';

export default store => next => action => {

  if( action.type === LOGOUT) {
    browserHistory.push('/login-form');
  } else if( action.type === LOGIN_FULFILLED ) {
    browserHistory.push('/');
  } else if (action.type === SIGN_UP_FULFILLED) {
    browserHistory.push('/members');
  }

  next(action);
};
