import {
	AUTH_FAIL,
	AUTH_START,
	AUTH_SUCCESS,
	LOGOUT_FAIL,
	LOGOUT_START,
	LOGOUT_SUCCESS,
} from '../actionTypes';

export const authStart = (payload) => ({
	type: AUTH_START,
	payload,
});

export const authSuccess = (payload) => ({
	type: AUTH_SUCCESS,
	payload,
});

export const authFail = (payload) => ({
	type: AUTH_FAIL,
	payload,
});

export const logoutStart = (payload) => ({
	type: LOGOUT_START,
	payload,
});

export const logoutSuccess = (payload) => ({
	type: LOGOUT_SUCCESS,
	payload,
});

export const logoutFail = (payload) => ({
	type: LOGOUT_FAIL,
	payload,
});
