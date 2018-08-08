import { put, takeLatest } from 'redux-saga/effects';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';
import { getApplicantRequest } from '../requests/applicantRequests';

let formData = '';

function* getApplicant(action) {
  try {
    console.log(action.payload.userId);
    formData = yield getApplicantRequest(action.payload.userId);
    console.log(formData);
    yield put({
      type: APPLICANT_ACTIONS.FILL_FORM,
      payload: formData,
    })
  } catch (error) {
    console.log('WHOOPSIES', error);
  }
}

function* applicantSaga() {
  yield takeLatest(APPLICANT_ACTIONS.GET_APPLICANT, getApplicant);

}

export default applicantSaga;
