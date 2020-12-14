import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	return <div className='App'>{isLoggedIn ? <Main /> : <Login />}</div>;
}

export default App;
