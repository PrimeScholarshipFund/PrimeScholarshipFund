import { combineReducers } from 'redux';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';

const applicant = (state = {}, action) => {
  switch (action.type) {
    case APPLICANT_ACTIONS.FILL_FORM:
      return {
        state: action.payload,
      }
    default:
      return state;
  }
};

export default applicant;
