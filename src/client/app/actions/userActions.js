import * as types from '../ActionConstants';
import axios from 'axios';


export function fetchUser(userId, token) {
  return function(dispatch) {
    dispatch({ type: types.FETCH_USER });
    axios.get(process.env.URL + '/users/' + userId, {
      headers: { 'token': token}
    })
    .then((res) => {
      dispatch({ type: types.FETCH_USER_FULFILLED, payload: res.data.user});
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_USER_REJECTED, payload: err});
    });
  };
}

export function fetchUsers(token) {
  return function(dispatch) {
    dispatch({ type: types.FETCH_USERS });
    axios.get(process.env.URL + '/users', {
      headers: { 'token': token}
    })
    .then((res) => {
      dispatch({ type: types.FETCH_USERS_FULFILLED, payload: res.data.users});
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_USERS_REJECTED, payload: err});
    });
  };
}


export function fetchUserPayments(userId, token) {
  return function(dispatch) {
    dispatch({ type: types.FETCH_USER_PAYMENTS });
    axios.get(process.env.URL + '/users/' + userId + '/payments', {
      headers: { 'token': token}
    })
    .then((res) => {
      dispatch({ type: types.FETCH_USER_PAYMENTS_FULFILLED, payload: res.data});
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_USER_PAYMENTS_REJECTED, payload: err});
    });
  };
}

export function addPayment(userId, token) {
  return function(dispatch) {
    dispatch({ type: types.MAKE_PAYMENT });
    axios.post(process.env.URL + '/users/' + userId + '/payments', {
      headers: { 'token': token}
    })
    .then((res) => {
      dispatch({type: types.MAKE_PAYMENT_FULFILLED, payload: res.data.message});
    })
    .catch((err) => {
      dispatch({type: types.MAKE_PAYMENT_REJECTED, payload: err});
    });
  };
}

export function addPastDuePayment(userId, token) {
  return function(dispatch) {
    dispatch({type: types.MAKE_PAST_DUE_PAYMENT});
    axios.post(process.env.URL + '/users/' + userId + '/pastdues', {
      headers: { 'token': token}
    })
    .then((res) => {
      dispatch({type: types.MAKE_PAST_DUE_PAYMENT_FULFILLED, payload: res.data.message});
    })
    .catch((err) => {
      dispatch({type: types.MAKE_PAST_DUE_PAYMENT_REJECTED, payload: err});
    }) ;
  };
}


export function removeUser(userId, token) {
  return function(dispatch) {
    dispatch({type: types.REMOVE_USER});
    axios.delete(process.env.URL + '/users/' + userId, {
      headers: { 'token': token}
    })
    .then((res) => {
      dispatch({type: types.REMOVE_USER_FULFILLED, payload: res.data.message});
    })
    .catch((err) => {
      dispatch({ type: types.REMOVE_USER_REJECTED, payload: err });
    });
  };
}

export function updateUserInfo(updatedUser, userId, token) {
  return function(dispatch) {
    dispatch({ type: types.UPDATE_USER });
    axios.put(process.env.URL + '/users/' + userId, updatedUser, {
      headers: { 'token': token }
    })
    .then((res) => {
      dispatch({type: types.UPDATE_USER_FULFILLED, payload: res.data.user });
    })
    .catch((err) => {
      dispatch({type: types.UPDATE_USER_REJECTED, payload: err });
    });
  };
}
