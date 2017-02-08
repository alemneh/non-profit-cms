import { combineReducers } from 'redux';

import user from './userReducer';
import login from './loginReducer';
import account from './accountReducer';


export default combineReducers({
  user,
  login,
  account
});
