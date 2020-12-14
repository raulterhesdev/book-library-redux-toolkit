import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
	apiKey: 'AIzaSyAtkq6eISEeD5EmvIVqGE3PTeLLPvt1hy4',
	authDomain: 'redux-saga-learning-2f466.firebaseapp.com',
	databaseURL: 'https://redux-saga-learning-2f466.firebaseio.com',
	projectId: 'redux-saga-learning-2f466',
	storageBucket: 'redux-saga-learning-2f466.appspot.com',
	messagingSenderId: '1004089938686',
	appId: '1:1004089938686:web:c668965ce71da739428baf',
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export const registerUser = ({ email, password }) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((user) => user)
		.catch((error) => Promise.reject(error));
};

export const loginUser = ({ email, password }) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => user)
		.catch((error) => Promise.reject(error));
};

export const logoutUser = () => {
	return firebase
		.auth()
		.signOut()
		.then(function () {
			// Sign-out successful.
		})
		.catch((error) => Promise.reject(error));
};

export const addBookFirebase = ({ title, author, createdAt }) => {
	// A post entry.
	const data = {
		title,
		author,
		createdAt,
	};

	// Get a key for a new Post.
	const newKey = firebase.database().ref().child('reviews').push().key;

	data.id = newKey;

	// Write the new post's data simultaneously in the posts list and the user's post list.
	const updates = {};
	updates['/books/' + newKey] = data;

	firebase.database().ref().update(updates);
	return data;
};

export const fetchBooksFirebase = () => {
	return firebase
		.database()
		.ref('/books')
		.once('value')
		.then((snapshot) => {
			const booksData = [];
			for (const key in snapshot.val()) {
				if (snapshot.val().hasOwnProperty(key)) {
					const element = snapshot.val()[key];
					booksData.push(element);
				}
			}
			return booksData;
		})
		.catch((error) => Promise.reject(error));
};

export const deleteBookFirebase = ({ id }) => {
	// return firebase.database().ref(`/books/${id}`).remove();

	// if this doesnt work
	var updates = {};
	updates['/books/' + id] = null;

	return firebase
		.database()
		.ref()
		.update(updates)
		.then(() => {
			return { id };
		})
		.catch((error) => Promise.reject(error));
};
