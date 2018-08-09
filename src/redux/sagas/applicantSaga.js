import { put, takeLatest } from 'redux-saga/effects';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';
import { checkApplicantRequest } from '../requests/applicantRequests';
import { getApplicationRequest } from '../requests/applicantRequests';
import { saveApplicationRequest } from '../requests/applicantRequests';


let formId = '';
let formData = '';

function* getApplicant() {
  try {
    formId = yield checkApplicantRequest();
    formData = yield getApplicationRequest(formId.id);
    yield put({
      type: APPLICANT_ACTIONS.FILL_FORM,
      payload: formData[0],
    })
  } catch (error) {
    console.log('WHOOPSIES', error);
  }
}

function* saveApplication(action) {
  try {
    console.log('cheetah', action.payload);
    yield saveApplicationRequest(action.payload);
    formData = yield getApplicationRequest(formId.id);
    console.log('Elephant', formData);
    yield put({
      type: APPLICANT_ACTIONS.FILL_FORM,
      payload: formData[0],
    })
  }
  catch (error) {
    console.log('WHOOPSIES', error);
  }
}

function* applicantSaga() {
  yield takeLatest(APPLICANT_ACTIONS.GET_APPLICANT, getApplicant);
  yield takeLatest(APPLICANT_ACTIONS.SAVE_APPLICATION, saveApplication)
}

export default applicantSaga;
