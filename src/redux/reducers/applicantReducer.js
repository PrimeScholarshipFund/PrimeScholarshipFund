import { combineReducers } from 'redux';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';

const applicant = (state = {}, action) => {
  switch (action.type) {
    case APPLICANT_ACTIONS.FILL_FORM:
      return {
        ...action.payload,
        accepted_at_prime: action.payload.accepted_at_prime.toString(),
        msp_tech_scholar: action.payload.msp_tech_scholar.toString(),

      }
    case APPLICANT_ACTIONS.EDIT_APPLICATION:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      }
    default:
      return state;
  }
};

export default applicant;
