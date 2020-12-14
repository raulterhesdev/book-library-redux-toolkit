import { all, call, put, take, takeEvery } from 'redux-saga/effects';
import {
	addBookFail,
	addBookStart,
	addBookSuccess,
	deleteBookFail,
	deleteBookStart,
	deleteBookSuccess,
	fetchBooksSuccess,
	fetchBooksStart,
	fetchBooksFail,
} from '../slices/booksSlice';
import {
	addBookFirebase,
	deleteBookFirebase,
	fetchBooksFirebase,
} from '../../utils/firebase';

function* addBook(action) {
	try {
		const data = yield call(addBookFirebase, action.payload);
		yield put(addBookSuccess(data));
	} catch (error) {
		yield put(addBookFail(error.message));
	}
}

function* fetchBooks(action) {
	try {
		const data = yield call(fetchBooksFirebase);
		yield put(fetchBooksSuccess(data));
	} catch (error) {
		yield put(fetchBooksFail(error.message));
	}
}

function* deleteBook(action) {
	try {
		const data = yield call(deleteBookFirebase, action.payload);
		yield put(deleteBookSuccess(data));
	} catch (error) {
		yield put(deleteBookFail(error.message));
	}
}

export default function* () {
	yield all([
		takeEvery(addBookStart.type, addBook),
		takeEvery(fetchBooksStart.type, fetchBooks),
		takeEvery(deleteBookStart.type, deleteBook),
	]);
}
