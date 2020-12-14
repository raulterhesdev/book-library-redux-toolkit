import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/index';
import authReducer from './slices/authSlice';
import booksReducer from './slices/booksSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: { auth: authReducer, books: booksReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
