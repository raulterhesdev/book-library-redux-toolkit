import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { authStart } from '../../store/slices/authSlice';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Header from '../Header/Header';

const LoginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;

	form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #111;
		padding: 64px;
		border-radius: 16px;
	}
`;

const Login = () => {
	const [isRegister, setIsRegister] = useState(false);
	const [email, setEmail] = useState('test@test.com');
	const [password, setPassword] = useState('test1234');
	const dispatch = useDispatch();
	const authError = useSelector((state) => state.auth.error);

	const submitForm = (e) => {
		e.preventDefault();
		dispatch(authStart({ email, password, isRegister }));
	};

	return (
		<>
			<Header />
			<LoginWrapper>
				<Button onClick={() => setIsRegister((prev) => !prev)}>
					Switch to {isRegister ? 'Login' : 'Register'}
				</Button>
				<form>
					<Input
						label='Email'
						name='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<Input
						label='Password'
						name='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					{authError && <p>{authError}</p>}
					<Button onClick={submitForm} isPrimary>
						{isRegister ? 'Register' : 'Login'}
					</Button>
				</form>
			</LoginWrapper>
		</>
	);
};

export default Login;
