import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// return all applications to admin page
function* fetchAllApplication() {
  try {
        const apps = yield call(axios.get, `api/application/admin`);
        yield put({ type: 'SET_ALL_APPLICATION', payload: apps.data});
    } catch (error) {
        console.log('Error in fetch all application');
        
    }
}

//compile saga functions here with calling type
function* adminSaga() {
    yield takeLatest('GET_ALL_APPLICATION', fetchAllApplication);
}

export default adminSaga;