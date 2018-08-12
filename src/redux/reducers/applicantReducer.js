import { combineReducers } from 'redux';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';

const applicant = (state = {}, action) => {
  switch (action.type) {
    case APPLICANT_ACTIONS.FILL_FORM:
      let employedDuringPrime = '';
      let governmentAssistance = '';
      let needTuition = '';
      if (action.payload.employed_during_prime !== null) {
        employedDuringPrime = action.payload.employed_during_prime.toString();
      }
      if (action.payload.government_assistance !== null) {
        governmentAssistance = action.payload.government_assistance.toString();
      }
      if (action.payload.need_tuition !== null) {
        needTuition = action.payload.need_tuition.toString();
      }

      return {
        ...action.payload,
        accepted_at_prime: action.payload.accepted_at_prime.toString(),
        applied_at_prime: action.payload.applied_at_prime.toString(),
        msp_tech_scholar: action.payload.msp_tech_scholar.toString(),
        applied_for_msp: action.payload.applied_for_msp.toString(),
        employed_during_prime: employedDuringPrime,
        government_assistance: governmentAssistance,
        need_tuition: needTuition,

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
