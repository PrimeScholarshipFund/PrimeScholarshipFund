import { put, takeLatest } from 'redux-saga/effects';
import { APPLICANT_ACTIONS } from '../actions/applicantActions';
import { getApplicantRequest } from '../requests/applicantRequests';

let applicantInfo = '';
let userId = '';

function* getApplicant(action) {
  try {
    userId = action.payload.userId;
    applicantInfo = yield getHandInfoRequest(action.payload);
    console.log(gameInfo);
    yield put({
      type: APPLICANT_ACTIONS.FILL_FORM,
      payload: applicantInfo,
    })
  } catch (error) {
    console.log('WHOOPSIES', error);
  }
}

function* applicantSaga() {
  yield takeLatest(TABLE_ACTIONS.NEW_GAME, newGame);

}

export default applicantSaga;
