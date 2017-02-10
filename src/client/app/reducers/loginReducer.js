import React from 'react';
import * as types from '../ActionConstants';

const initialState = {
  token: null,
  userId: null,
  fetching: false,
  fetched: false,
  error: null,
  success: null,
  slideToggleClass: ''
}

export default function(state=initialState, action) {
  switch(action.type) {
    case types.LOGIN: {
      return {...state, fetching: true}
    }
    case types.LOGIN_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.LOGIN_FULFILLED: {
      const { token, userId} = action.payload;
      return {
        ...state,
        fetching: false,
        fetched: true,
        token,
        userId
      }
    }
    case types.ADD_USER: {
      return {...state, fetching: true}
    }
    case types.ADD_USER_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.ADD_USER_FULFILLED: {
      return {...state, fetching: false, fetched: true}
    }
    case types.LOGOUT: {
      return initialState;
    }
  }
  return state;
}
