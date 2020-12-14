import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		authSuccess(state) {
			state.isLoading = false;
			state.isLoggedIn = true;
		},
		authFail(state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		logoutStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		logoutSuccess() {
			return initialState;
		},
		logoutFail(state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

export const {
	authFail,
	authStart,
	authSuccess,
	logoutStart,
	logoutFail,
	logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
