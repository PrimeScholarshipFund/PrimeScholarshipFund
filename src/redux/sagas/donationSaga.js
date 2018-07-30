import { put, takeLatest } from 'redux-saga/effects';
import { DONATION_ACTIONS } from '../actions/donationAction';
import { postDonationRequest } from '../requests/donationRequests';

let chargeResponse = '';

function* acceptDonations(action) {
  try {
    chargeResponse = yield postDonationRequest(action.payload);
    console.log(chargeResponse);
    yield put({
      type: DONATION_ACTIONS.DISPLAY_MESSAGE,
      payload: chargeResponse,
    })
  } catch (error) {
    console.log('WHOOPSIES', error);
  }
}

function* donationSaga() {
  yield takeLatest(DONATION_ACTIONS.POST_DONATION, acceptDonations);

}

export default donationSaga;
