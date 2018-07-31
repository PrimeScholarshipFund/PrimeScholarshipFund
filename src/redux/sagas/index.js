import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import adminSaga from './adminSaga';
import donationSaga from './donationSaga';
import applicantSaga from './applicantSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    adminSaga(),
    donationSaga(),
    applicantSaga(),
    // watchIncrementAsync()
  ]);
}
