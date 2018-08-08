import { combineReducers } from 'redux';

const adminApplication = (state = '', action) => {
  switch (action.type) {
    case 'SET_ALL_APPLICATION':
      return [...action.payload];
    default:
      return state;
  }
};



export default combineReducers({
  adminApplication,
});