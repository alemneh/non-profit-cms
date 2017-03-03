import React from 'react';
import * as types from '../ActionConstants';

const initialState = {
  user: null,
  users: [],
  dues: [],
  payments: [],
  error: null,
  isEditing: false,
  fetching: false,
  fetched: false,
  activeUser: null
};

export default function(state=initialState, action) {
  switch (action.type) {
    case types.FETCH_USER: {
      return {...state, fetching: true}
    }
    case types.FETCH_USER_REJECTED: {
      return {...state, fetching:false, error: action.payload}
    }
    case types.FETCH_USER_FULFILLED: {
      return {
        ...state,
        fetching:false,
        fetched:true,
        user: action.payload
      }
    }
    case types.FETCH_USERS: {
      return {...state, fetching: true};
    }
    case types.FETCH_USERS_REJECTED: {
      return {...state, fetching: false, error: action.payload};
    }
    case types.FETCH_USERS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
    }
    case types.FETCH_USER_PAYMENTS: {
      return {...state, fetching: true}
    }
    case types.FETCH_USER_PAYMENTS_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.FETCH_USER_PAYMENTS_FULFILLED: {
      const {payments} = action.payload;
      return {
        ...state,
        fetching: false,
        fetched: true,
        payments
      }
    }
    case types.MAKE_PAYMENT: {
      return {...state, fetching: true};
    }
    case types.MAKE_PAYMENT_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.MAKE_PAYMENT_FULFILLED: {
      const payments = [...state.payments].concat(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        payments
      }
    }
    case types.MAKE_PAST_DUE_PAYMENT: {
      return {...state, fetching: true}
    }
    case types.MAKE_PAST_DUE_PAYMENT_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.MAKE_PAST_DUE_PAYMENT_FULFILLED: {
      const dues = [...state.dues].concat(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        dues
      }
    }
    case types.REMOVE_USER: {
      return {...state, fetching: true}
    }
    case types.REMOVE_USER_REJECTED: {
      return {...state, fetching:false, error: action.payload}
    }
    case types.REMOVE_USER_FULFILLED: {
      const removedUserId = action.payload;
      const users = [...state.users].filter((user) => user._id != removedUserId);
      return {
        ...state,
        fetched: true,
        fetching: false,
        users
      }
    }
    case types.UPDATE_USER: {
      return {...state, fetching: true}
    }
    case types.UPDATE_USER_REJECTED: {
      return {...state, fetching:false, error: action.payload}
    }
    case types.UPDATE_USER_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        isEditing: false,
        activeUser: action.payload
      }
    }
    case types.SET_ACTIVE_USER: {
      return {...state, activeUser: action.payload}
    }
    case types.SET_EDITING_MODE: {
      return {...state, isEditing: true}
    }
    case types.CLEAR_EDITING_MODE: {
      return {...state, isEditing: false}
    }
    case types.LOGOUT:{
     return initialState
   }
    default:
      return state;
  }
}
