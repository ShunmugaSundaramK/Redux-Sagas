import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GET_USERS_FETCH, GET_USERS_SUCCESS, POST_USERS_FAILURE, POST_USERS_REQUEST, POST_USERS_SUCCESS } from './Action';

//GET Request
function* usersFetch() {
    try {
        const response = yield call(fetch, 'http://localhost:3500/products');
        const users = yield response.json();
        yield put({ type: GET_USERS_SUCCESS, users });
    } catch (error) {
        yield put({ type: 'GET_USERS_ERROR', error: error.message });
        console.error('Error fetching users:', error);
    }
}

//POST Request

function postDataToServer(data) {
    return fetch('http://localhost:3500/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

function* postDataSaga(action) {
    try {
        const response = yield call(postDataToServer, action.payload);
        const responseData = yield response.json();
        yield put({ type: POST_USERS_SUCCESS, payload: responseData });
    } catch (error) {
        yield put({ type: POST_USERS_FAILURE, error: error.message });
    }
}

function* mySaga() {
    yield all([
        takeEvery(GET_USERS_FETCH, usersFetch),
        takeEvery(POST_USERS_REQUEST, postDataSaga)
    ])
}

export default mySaga;





