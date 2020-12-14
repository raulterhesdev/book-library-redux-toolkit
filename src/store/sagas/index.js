import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import booksSaga from './booksSaga';

export default function* saga() {
	yield all([authSaga(), booksSaga()]);
}
