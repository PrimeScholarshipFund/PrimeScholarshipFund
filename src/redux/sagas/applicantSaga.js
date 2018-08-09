import { put, takeLatest } from 'redux-saga/effects';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';
import { checkApplicantRequest } from '../requests/applicantRequests';
import { getApplicationRequest } from '../requests/applicantRequests';

let formId = '';
let formData = '';

function* getApplicant() {
  try {
    formId = yield checkApplicantRequest();
    console.log('Giraffe', formId);
    formData = yield getApplicationRequest(formId.id);
    console.log('Elephant', formData);
    yield put({
      type: APPLICANT_ACTIONS.FILL_FORM,
      payload: formData[0],
    })
  } catch (error) {
    console.log('WHOOPSIES', error);
  }
}

function* applicantSaga() {
  yield takeLatest(APPLICANT_ACTIONS.GET_APPLICANT, getApplicant);

}

export default applicantSaga;
