import React from 'react';
import { expect } from 'chai';

import * as types from '../src/client/app/ActionConstants';
import reducer from '../src/client/app/reducers/accountReducer';


let initialState, expectedState;

describe('accountReducer', () => {
  beforeEach(() => {

    initialState = {
      accounts: [],
      fetching: false,
      fetched: false,
      error: null,
      activeTransaction: null,
      transactions: []
    };

    expectedState = {
      accounts: [],
      fetching: false,
      fetched: false,
      error: null,
      activeTransaction: null,
      transactions: []
    };

  });

  it('should handle FETCH_ACCOUNTS', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.FETCH_ACCOUNTS
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_ACCOUNTS_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.FETCH_ACCOUNTS_REJECTED,
      payload: { error: 'error' }
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_ACCOUNTS_FULFILLED', () => {
    initialState.fetching = true;
    initialState.accounts = [];

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.accounts = [{id: 1, name: 'NGO-FUND'}];

    expect(reducer(initialState, {
      type: types.FETCH_ACCOUNTS_FULFILLED,
      payload: [{id: 1, name: 'NGO-FUND'}]
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_ALL_TRANSACTIONS', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.FETCH_ALL_TRANSACTIONS
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_ALL_TRANSACTIONS_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.FETCH_ALL_TRANSACTIONS_REJECTED,
      payload: { error: 'error' }
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_ALL_TRANSACTIONS_FULFILLED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.transactions = [{id: 1, amount: 15}];

    expect(reducer(initialState, {
      type: types.FETCH_ALL_TRANSACTIONS_FULFILLED,
      payload: [{id: 1, amount: 15}]
    })).to.deep.equal(expectedState);
  });

  it('should handle MAKE_TRANSACTION', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.MAKE_TRANSACTION
    })).to.deep.equal(expectedState);
  });

  it('should handle MAKE_TRANSACTION_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error'};

    expect(reducer(initialState, {
      type: types.MAKE_TRANSACTION_REJECTED,
      payload: { error: 'error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle MAKE_TRANSACTION_FULFILLED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.transactions = [{id: 1, amount: 15}];

    expect(reducer(initialState, {
      type: types.MAKE_TRANSACTION_FULFILLED,
      payload: {id: 1, amount: 15}
    })).to.deep.equal(expectedState);
  });

  it('should handle SET_ACTIVE_TRANSACTION', () => {
    expectedState.activeTransaction = { id: 1, amount: 15};

    expect(reducer(initialState, {
      type: types.SET_ACTIVE_TRANSACTION,
      payload: {id:1, amount: 15}
    })).to.deep.equal(expectedState);
  });

});
