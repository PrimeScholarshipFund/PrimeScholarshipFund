import { put, takeLatest } from 'redux-saga/effects';
import { DONATION_ACTIONS } from '../actions/donationActions';
import { postDonationRequest } from '../requests/donationRequests';

let chargeResponse = '';

function* acceptDonations(action) {
  try {
    chargeResponse = yield postDonationRequest(action.payload);
    yield put({
      type: DONATION_ACTIONS.DISPLAY_MESSAGE,
      payload: chargeResponse,
    })
  } catch (error) {
    console.error(500);
  }
}

function* donationSaga() {
  yield takeLatest(DONATION_ACTIONS.POST_DONATION, acceptDonations);

}

export default donationSaga;
