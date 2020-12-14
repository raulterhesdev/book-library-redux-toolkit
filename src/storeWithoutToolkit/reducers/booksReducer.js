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

const initialState = {
	books: [],
	error: null,
	isLoading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_BOOK_START:
		case FETCH_BOOKS_START:
		case DELETE_BOOK_START:
			return {
				...state,
				error: null,
				isLoading: true,
			};
		case ADD_BOOK_FAIL:
		case FETCH_BOOKS_FAIL:
		case DELETE_BOOK_FAIL:
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		case ADD_BOOK_SUCCESS: {
			return {
				...state,
				isLoading: false,
				books: [...state.books, payload],
			};
		}
		case FETCH_BOOKS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				books: payload,
			};
		}
		case DELETE_BOOK_SUCCESS:
			return {
				...state,
				isLoading: false,
				books: state.books.filter((book) => book.id !== payload.id),
			};
		default:
			return state;
	}
};
