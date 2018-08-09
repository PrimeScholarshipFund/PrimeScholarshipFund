import { combineReducers } from 'redux';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';

const applicant = (state = {}, action) => {
  switch (action.type) {
    case APPLICANT_ACTIONS.FILL_FORM:
      return {
        state: {
          ...action.payload,
          accepted_at_prime: action.payload.accepted_at_prime.toString(),
          msp_tech_scholar: action.payload.msp_tech_scholar.toString(),
        },
      }
    default:
      return state;
  }
};

export default applicant;
