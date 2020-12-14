import {
	ADD_BOOK_FAIL,
	ADD_BOOK_START,
	ADD_BOOK_SUCCESS,
	FETCH_BOOKS_FAIL,
	FETCH_BOOKS_START,
	FETCH_BOOKS_SUCCESS,
	DELETE_BOOK_FAIL,
	DELETE_BOOK_START,
	DELETE_BOOK_SUCCESS,
} from '../actionTypes';

export const addBookStart = (payload) => ({
	type: ADD_BOOK_START,
	payload,
});

export const addBookSuccess = (payload) => ({
	type: ADD_BOOK_SUCCESS,
	payload,
});

export const addBookFail = (payload) => ({
	type: ADD_BOOK_FAIL,
	payload,
});

export const fetchBooksStart = (payload) => ({
	type: FETCH_BOOKS_START,
	payload,
});

export const fetchBooksFail = (payload) => ({
	type: FETCH_BOOKS_FAIL,
	payload,
});

export const fetchBooksSuccess = (payload) => ({
	type: FETCH_BOOKS_SUCCESS,
	payload,
});

export const deleteBookStart = (payload) => ({
	type: DELETE_BOOK_START,
	payload,
});

export const deleteBookSuccess = (payload) => ({
	type: DELETE_BOOK_SUCCESS,
	payload,
});

export const deleteBookFail = (payload) => ({
	type: DELETE_BOOK_FAIL,
	payload,
});
