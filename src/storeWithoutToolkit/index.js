import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';

import rootSaga from './sagas';
import authReducer from './reducers/authReducer';
import booksReducer from './reducers/booksReducer';

const rootReducer = combineReducers({ auth: authReducer, books: booksReducer });
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	withDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
