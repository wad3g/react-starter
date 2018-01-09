import { call, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

function* exampleSaga(action) {
  yield call([window.console, 'debug'], 'Location changed. Action: ', action);
}

export default function root(injections) {
  return function* rootSaga() {
    yield takeEvery(LOCATION_CHANGE, exampleSaga);
  };
}
