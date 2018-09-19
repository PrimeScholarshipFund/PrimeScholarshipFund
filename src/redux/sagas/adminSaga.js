import { put, takeLatest } from 'redux-saga/effects';
import { updateApplication } from '../requests/adminRequests';
import { getAllApplicationsRequest } from '../requests/adminRequests';
import { ADMIN_ACTIONS } from '../actions/adminActions';

// return all applications to admin page
let apps = '';
function* fetchAllApplications() {
  try {
        apps = yield getAllApplicationsRequest();
        yield put({ type: 'SET_ALL_APPLICATIONS', payload: apps});
    } catch (error) {
        console.error(500);  

    }
}

function* updateApplicationSaga(action) {
    try {
        yield updateApplication(action.payload);
        yield put({ type: ADMIN_ACTIONS.GET_ALL_APPLICATIONS });
    } catch (error) {
        console.error(500);  
    }
}

//compile saga functions here with calling type
function* adminSaga() {
    yield takeLatest(ADMIN_ACTIONS.GET_ALL_APPLICATIONS, fetchAllApplications);
    yield takeLatest(ADMIN_ACTIONS.SAVE_APPLICATION, updateApplicationSaga);
}

export default adminSaga;
