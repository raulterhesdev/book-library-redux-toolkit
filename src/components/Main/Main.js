import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logoutStart } from '../../store/slices/authSlice';
import {
	addBookStart,
	deleteBookStart,
	fetchBooksStart,
} from '../../store/slices/booksSlice';
import { getBooks } from '../../store/selectors/booksSelectors';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Header from '../Header/Header';

const StyledMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 16px 0;
`;

const AddBookWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #333;
	padding: 32px 64px;
	border-radius: 16px;
	color: white;

	h1 {
		margin-bottom: 32px;
	}

	form {
		display: flex;
		flex-direction: column;
	}
`;

const LibraryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #333;
	padding: 32px 64px;
	border-radius: 16px;
	color: white;
	width: 90%;
	margin-top: 32px;

	h1 {
		margin-bottom: 32px;
		color: var(--primary);
	}

	div {
		display: grid;
		grid-template-columns: 4fr 4fr 1fr;
		width: 100%;
		font-size: 18px;
		padding: 8px;
		border-bottom: 1px solid var(--primary);

		button {
			background-color: transparent;
			border: none;
			outline: none;
			width: 30%;
			color: red;
			border: 1px solid red;

			&:hover {
				background-color: red;
				color: black;
			}
		}
	}
`;

const Main = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('Test');
	const [author, setAuthor] = useState('Test123145');

	useEffect(() => {
		dispatch(fetchBooksStart());
	}, []);

	const allBooks = useSelector(getBooks).map((book) => (
		<div key={book.id}>
			<p>{book.title}</p>
			<p>{book.author}</p>
			<button onClick={() => dispatch(deleteBookStart({ id: book.id }))}>
				X
			</button>
		</div>
	));

	const addBook = (e) => {
		e.preventDefault();
		dispatch(addBookStart({ title, author }));
	};

	return (
		<>
			<Header />
			<StyledMain>
				<Button onClick={() => dispatch(logoutStart())}>Logout</Button>
				<AddBookWrapper>
					<h1>Add a book:</h1>
					<form>
						<Input
							name='title'
							label='Title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<Input
							name='author'
							label='Author'
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
						/>
						<Button onClick={addBook} isPrimary>
							Add to library
						</Button>
					</form>
				</AddBookWrapper>
				<LibraryWrapper>
					<h1>Your library:</h1>
					<div isHeader>
						<p>Title</p>
						<p>Author</p>
						<p></p>
					</div>
					{allBooks}
				</LibraryWrapper>
			</StyledMain>
		</>
	);
};

export default Main;
