import { put, takeLatest } from 'redux-saga/effects';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';
import { getApplicantRequest } from '../requests/applicantRequests';

let applicantInfo = '';
let userId = '';

function* getApplicant(action) {
  try {
    applicantInfo = yield getApplicantRequest(action.payload);
    yield put({
      type: APPLICANT_ACTIONS.FILL_FORM,
      payload: applicantInfo,
    })
  } catch (error) {
    console.log('WHOOPSIES', error);
  }
}

function* applicantSaga() {
  yield takeLatest(APPLICANT_ACTIONS.GET_APPLICANT, getApplicant);

}

export default applicantSaga;
