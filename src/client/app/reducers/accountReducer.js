import * as types from '../ActionConstants';

const initialState = {
  accounts: [],
  fetching: null,
  fetched: null,
  error: null,
  payments: []
};

export default function(state=initialState, action) {
  switch (action.type) {
    case types.FETCH_ACCOUNTS: {
      return {...state, fetching: true}
    }
    case types.FETCH_ACCOUNTS_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.FETCH_ACCOUNTS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        accounts: action.payload
      }
    }
    case types.FETCH_ALL_PAYMENTS: {
      return {...state, fetching: true}
    }
    case types.FETCH_ALL_PAYMENTS_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.FETCH_ALL_PAYMENTS_FUFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        payments: action.payload
      }
    }
    default:
      return state;
  }
}
