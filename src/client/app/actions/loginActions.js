import * as types from '../ActionConstants';
import axios from 'axios';

export function login(username, password) {
  return function(dispatch) {
    dispatch({type: types.LOGIN});
    axios.get(process.env.URL + '/login', {
      auth: {
        username,
        password
      }
    })
    .then((res) => {
      dispatch({type: types.LOGIN_FULFILLED, payload: res.data });
    })
    .catch((err) => {
      dispatch({type: types.LOGIN_REJECTED, payload: err });
    });
  };
}

export function addUser(newUser, token) {
  return function(dispatch) {
    dispatch({type: types.ADD_USER});
    axios.post(process.env.URL + '/users', newUser, {
      headers: { 'token': token}
    })
      .then((res) => {
        dispatch({type: types.ADD_USER_FULFILLED, payload: res.data.message});
      })
      .catch((err) => {
        dispatch({type: types.ADD_USER_REJECTED, payload: err });
      });
  };
}
