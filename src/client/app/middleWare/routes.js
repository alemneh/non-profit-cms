import React from 'react';
import { browserHistory } from 'react-router';
import * as types from '../ActionConstants';

export default store => next => action => {
  console.log(action.type);
  if( action.type === types.LOGOUT) {
    browserHistory.push('/login-form');
  } else if( action.type === types.LOGIN_FULFILLED ) {
    browserHistory.push('/');
  } else if (action.type === types.ADD_USER_FULFILLED) {
    browserHistory.push('/members-list');
  } else if (action.type === types.SET_ACTIVE_USER) {
    browserHistory.push('/profile');
  } else if (action.type === types.REMOVE_USER_FULFILLED) {
    browserHistory.push('members-list');
  }

  next(action);
};
