import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import admin from './adminReducer';
import applicant from './applicantReducer';

const store = combineReducers({
  user,
  login,
  admin,
  applicant,
});

export default store;
