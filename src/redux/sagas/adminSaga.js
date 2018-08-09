import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ADMIN_ACTIONSu, } from '../actions/adminActions';
import { updateApplication } from '../requests/adminRequests';

// return all applications to admin page
function* fetchAllApplication() {
  try {
        const apps = yield call(axios.get, `api/application/admin`);
        yield put({ type: 'SET_ALL_APPLICATION', payload: apps.data});
    } catch (error) {
        console.log('Error in fetch all application');

    }
}

function* updateApplicationSaga(action) {
    try {
        yield updateApplication(action.payload);
        yield put({ type: 'GET_ALL_APPLICATIONS' });
    } catch (error) {
        console.log('Error in update application');
    }
}

//compile saga functions here with calling type
function* adminSaga() {
    yield takeLatest('GET_ALL_APPLICATION', fetchAllApplication);
    yield takeLatest('SAVE_COMMENTS_AND_STATUS', updateApplicationSaga);
}

export default adminSaga;