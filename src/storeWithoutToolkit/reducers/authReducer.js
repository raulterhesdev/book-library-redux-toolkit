import {
	AUTH_FAIL,
	AUTH_SUCCESS,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	LOGOUT_START,
	AUTH_START,
} from '../actionTypes';
const initialState = {
	isLoggedIn: false,
	error: null,
	isLoading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case AUTH_START:
		case LOGOUT_START:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case AUTH_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
			};
		case AUTH_FAIL:
		case LOGOUT_FAIL:
			return {
				...state,
				isLoggedIn: false,
				error: payload,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLoggedIn: false,
				isLoading: false,
			};
		default:
			return state;
	}
};
