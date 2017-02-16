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

export function fetchAllTransactions(token) {
  return function(dispatch) {
    dispatch({type: types.FETCH_ALL_TRANSACTIONS});
    axios.get(process.env.URL + '/transactions', {
      headers: { 'token': token }
    })
    .then((res) => {
      dispatch({type: types.FETCH_ALL_TRANSACTIONS_FULFILLED, payload: res.data.transactions});
    })
    .catch((err) => {
      dispatch({type: types.FETCH_ALL_TRANSACTIONS_REJECTED, payload: err});
    });
  };
}

export function makeTransaction(transAct, token) {
  return function(dispatch) {
    dispatch({type: types.MAKE_TRANSACTION});
    axios.post(process.env.URL + '/transactions', transAct, {
      headers: { 'token': token }
    })
    .then((res) => {
      dispatch({type: types.MAKE_TRANSACTION_FULFILLED, payload: res.data.newTransaction});
    })
    .catch((err) => {
      dispatch({type: types.MAKE_TRANSACTION_REJECTED, payload: err});
    });
  };
}
