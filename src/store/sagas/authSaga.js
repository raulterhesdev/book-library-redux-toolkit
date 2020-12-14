import { call, put, take } from 'redux-saga/effects';
import {
	authStart,
	logoutStart,
	authFail,
	authSuccess,
	logoutFail,
	logoutSuccess,
} from '../slices/authSlice';
import { registerUser, loginUser, logoutUser } from '../../utils/firebase';

export function* logout() {
	try {
		yield call(logoutUser);
		yield put(logoutSuccess());
	} catch (error) {
		yield put(logoutFail(error.message));
	}
}

export function* authorize(action) {
	try {
		const user = action.payload.isRegister
			? yield call(registerUser, action.payload)
			: yield call(loginUser, action.payload);
		yield put(authSuccess());
		return user;
	} catch (error) {
		yield put(authFail(error.message));
	}
}

// TODO: try to add the register here too
export function* loginFlow() {
	while (true) {
		const action = yield take(authStart.type);
		const user = yield call(authorize, action);
		if (user) {
			yield take(logoutStart.type);
			yield call(logout);
		}
	}
}

export default function* () {
	yield loginFlow();
}
