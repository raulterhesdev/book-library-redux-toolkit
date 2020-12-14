import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	books: [],
	error: null,
	isLoading: false,
};

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBookStart: {
			reducer: (state) => {
				state.isLoading = true;
				state.error = null;
			},
			prepare: ({ title, author }) => {
				const createdAt = new Date();
				return { payload: { title, author, createdAt } };
			},
		},
		addBookSuccess(state, { payload }) {
			state.isLoading = false;
			state.books.push(payload);
		},
		addBookFail(state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		fetchBooksStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		fetchBooksSuccess(state, { payload }) {
			state.isLoading = false;
			state.books = payload;
		},
		fetchBooksFail(state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
		deleteBookStart(state) {
			state.isLoading = true;
			state.error = null;
		},
		deleteBookSuccess(state, { payload }) {
			state.isLoading = false;
			state.books = state.books.filter((book) => book.id !== payload.id);
		},
		deleteBookFail(state, { payload }) {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

export const {
	addBookStart,
	addBookFail,
	addBookSuccess,
	fetchBooksFail,
	fetchBooksStart,
	fetchBooksSuccess,
	deleteBookFail,
	deleteBookStart,
	deleteBookSuccess,
} = booksSlice.actions;

export default booksSlice.reducer;
