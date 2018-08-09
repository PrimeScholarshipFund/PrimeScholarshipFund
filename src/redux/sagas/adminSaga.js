import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { updateApplication } from '../requests/adminRequests';
import { getAllApplicationsRequest } from '../requests/adminRequests';

// return all applications to admin page
let apps = '';
function* fetchAllApplications() {
  try {
        apps = yield getAllApplicationsRequest();
        console.log(apps);
        yield put({ type: 'SET_ALL_APPLICATIONS', payload: apps});
    } catch (error) {
        console.log('Error in fetch all application');

    }
}

function* updateApplicationSaga(action) {
    try {
      console.log(action.payload);
        yield updateApplication(action.payload);
        yield put({ type: 'GET_ALL_APPLICATIONS' });
    } catch (error) {
        console.log('Error in update application');
    }
}

//compile saga functions here with calling type
function* adminSaga() {
    yield takeLatest('GET_ALL_APPLICATIONS', fetchAllApplications);
    yield takeLatest('SAVE_APPLICATION', updateApplicationSaga);
}

export default adminSaga;
