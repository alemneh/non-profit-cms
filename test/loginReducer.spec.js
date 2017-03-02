import React from 'react';
import { expect } from 'chai';

import * as types from '../src/client/app/ActionConstants';
import reducer from '../src/client/app/reducers/loginReducer';

let initialState, expectedState;

describe('loginReducer', () => {
  beforeEach(() => {

    initialState = {
      token: null,
      fetching: false,
      fetched: false,
      error: null,
      success: null
    };

    expectedState = {
      token: null,
      fetching: false,
      fetched: false,
      error: null,
      success: null
    };

  });

  it('should handle LOGIN', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.LOGIN
    })).to.deep.equal(expectedState);
  });

  it('should handle LOGIN_REJECTED', () => {
    expectedState.fetching = false;
    expectedState.error = {error: 'error'};

    initialState.fetching = true;

    expect(reducer(initialState, {
      type: types.LOGIN_REJECTED,
      payload: { error: 'error' }
    })).to.deep.equal(expectedState);
  });

  it('should handle LOGIN_FULFILLED', () => {
    expectedState.fetching = false;
    expectedState.fetched = true;
    expectedState.user = { name: 'Alem'};
    expectedState.token = 'abc123';


    initialState.fetching = true;

    expect(reducer(initialState, {
      type: types.LOGIN_FULFILLED,
      payload: { token: 'abc123', user: { name: 'Alem'}}
    })).to.deep.equal(expectedState);
  });

  it('should handle ADD_USER', () => {
    expectedState.fetching = true;

    expect(reducer(initialState, {
      type: types.ADD_USER,
    })).to.deep.equal(expectedState);
  });

  it('should handle ADD_USER_REJECTED', () => {
    expectedState.fetching = false;
    expectedState.error    = { error: 'error' };

    initialState.fetching = true;

    expect(reducer(initialState, {
      type: types.ADD_USER_REJECTED,
      payload: { error: 'error' }
    })).to.deep.equal(expectedState);
  });

  it('should handle ADD_USER_FULFILLED', () => {
    expectedState.fetching = false;
    expectedState.fetched  = true;

    initialState.fetching = true;

    expect(reducer(initialState, {
      type: types.ADD_USER_FULFILLED,
      payload: { message: 'User added!'}
    })).to.deep.equal(expectedState);
  });

});
