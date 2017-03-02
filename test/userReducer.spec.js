import React from 'react';
import { expect } from 'chai';

import * as types from '../src/client/app/ActionConstants';
import reducer from '../src/client/app/reducers/userReducer';


let initialState, expectedState;

describe('userReducer', () => {
  beforeEach(() => {

    initialState = {
      user: null,
      users: [],
      payments: [],
      dues: [],
      error: null,
      isEditing: false,
      fetching: false,
      fetched: false,
      activeUser: null
    };

    expectedState = {
      user: null,
      users: [],
      payments: [],
      dues: [],
      error: null,
      isEditing: false,
      fetching: false,
      fetched: false,
      activeUser: null
    };

  });

  it('should handle FETCH_USER', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.FETCH_USER
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.FETCH_USER_REJECTED,
      payload: { error: 'error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_FULFILLED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.user     = { name: 'Alem' };

    expect(reducer(initialState, {
      type: types.FETCH_USER_FULFILLED,
      payload: { name: 'Alem' }
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USERS', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.FETCH_USERS
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USERS_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.FETCH_USERS_REJECTED,
      payload: { error: 'error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USERS_FULFILLED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.users     = [{ name: 'Alem' }];

    expect(reducer(initialState, {
      type: types.FETCH_USERS_FULFILLED,
      payload: [{ name: 'Alem' }]
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_PAYMENTS', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.FETCH_USER_PAYMENTS
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_PAYMENTS_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.FETCH_USER_PAYMENTS_REJECTED,
      payload: { error: 'error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_PAYMENTS_FULFILLED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.payments     = [{id: 123, amount: 25}];

    expect(reducer(initialState, {
      type: types.FETCH_USER_PAYMENTS_FULFILLED,
      payload: { payments: [{id: 123, amount: 25}] }
    })).to.deep.equal(expectedState);
  });

  it('should handle MAKE_PAYMENT', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.MAKE_PAYMENT
    })).to.deep.equal(expectedState);
  });

  it('should handle MAKE_PAYMENT_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.MAKE_PAYMENT_REJECTED,
      payload: { error: 'error' }
    })).to.deep.equal(expectedState);
  });

  it('should handle MAKE_PAYMENT_FULFILLED', () => {
    initialState.fetching = true;
    initialState.payments = [{id: 1, amount: 15}];

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.payments = [{id: 1, amount: 15}, {id: 2, amount: 15}];

    expect(reducer(initialState, {
      type: types.MAKE_PAYMENT_FULFILLED,
      payload: { id: 2, amount: 15 }
    })).to.deep.equal(expectedState);
  });

  it('should handle REMOVE_USER', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.REMOVE_USER
    })).to.deep.equal(expectedState);
  });

  it('should handle REMOVE_USER_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.REMOVE_USER_REJECTED,
      payload: { error: 'error' }
    })).to.deep.equal(expectedState);
  });

  it('should handle REMOVE_USER_FULFILLED', () => {
    initialState.fetching = true;
    initialState.users    = [{ _id: 1, name: 'Alem'}];


    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.users = [];

    expect(reducer(initialState, {
      type: types.REMOVE_USER_FULFILLED,
      payload: 1
    })).to.deep.equal(expectedState);
  });

  it('should handle UPDATE_USER', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.UPDATE_USER,
    })).to.deep.equal(expectedState);
  });

  it('should handle UPDATE_USER_REJECTED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    expect(reducer(initialState, {
      type: types.UPDATE_USER_REJECTED,
      payload: { error: 'error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle UPDATE_USER_FULFILLED', () => {
    initialState.fetching = true;

    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.activeUser = { id: 1, name: 'Alem' };

    expect(reducer(initialState, {
      type: types.UPDATE_USER_FULFILLED,
      payload: { id: 1, name: 'Alem'}
    })).to.deep.equal(expectedState);
  });

  it('should handle SET_ACTIVE_USER', () => {
    expectedState.activeUser = { id: 1, name: 'Alem' };

    expect(reducer(initialState, {
      type: types.SET_ACTIVE_USER,
      payload: { id: 1, name: 'Alem' }
    })).to.deep.equal(expectedState);
  });

  it('should handle SET_EDITING_MODE', () => {
    expectedState.isEditing = true;

    expect(reducer(initialState, {
      type: types.SET_EDITING_MODE
    })).to.deep.equal(expectedState);
  });

});
