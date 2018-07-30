import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import admin from './adminReducer';

const store = combineReducers({
  user,
  login,
  admin,
});

export default store;
