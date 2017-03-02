import * as types from '../ActionConstants';

const initialState = {
  accounts: [],
  fetching: false,
  fetched: false,
  error: null,
  activeTransaction: null,
  transactions: []
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
    case types.FETCH_ALL_TRANSACTIONS: {
      return {...state, fetching: true}
    }
    case types.FETCH_ALL_TRANSACTIONS_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.FETCH_ALL_TRANSACTIONS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        transactions: action.payload
      }
    }
    case types.MAKE_TRANSACTION: {
      return {...state, fetching: true}
    }
    case types.MAKE_TRANSACTION_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.MAKE_TRANSACTION_FULFILLED: {
      const newTransactions = [...state.transactions].concat(action.payload);
      return {
        ...state,
        fetching: false,
        fetched: true,
        transactions:
        newTransactions
      }
    }
    case types.SET_ACTIVE_TRANSACTION: {
      return {...state, activeTransaction: action.payload}
    }
    case types.LOGOUT:{
     return initialState
   }
    default:
      return state;
  }
}
