import * as types from '../ActionConstants';
import axios from 'axios';

export function fetchAllAccounts(token) {
  return function(dispatch) {
    dispatch({type: types.FETCH_ACCOUNTS});
    axios.get(process.env.URL + '/accounts', {
      headers: { 'token': token }
    })
    .then((res) => {
      dispatch({type: types.FETCH_ACCOUNTS_FULFILLED, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({type: types.FETCH_ACCOUNTS_REJECTED, payload: err});
    });
  };
}

export function fetchAllPayments(token) {
  return function(dispatch) {
    dispatch({type: types.FETCH_ALL_PAYMENTS});
    axios.get(process.env.URL + '/payments', {
      headers: { 'token': token }
    })
    .then((res) => {
      dispatch({type: types.FETCH_ALL_PAYMENTS_FUFILLED, payload: res.data.payments});
    })
    .catch((err) => {
      dispatch({type: types.FETCH_ALL_PAYMENTS_REJECTED, payload: err});
    });
  };
}
