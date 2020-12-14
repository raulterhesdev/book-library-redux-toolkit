import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
	margin-bottom: 32px;
	position: relative;

	label {
		color: var(--primary);
		font-size: 16px;
		background-color: #111;
		border-radius: 12px;
		display: inline;
		position: absolute;
		top: 0;
		left: 50%;
		padding: 4px 12px;
		transform: translate(-50%, -50%);
	}

	input {
		padding: 16px 16px 12px 16px;
		font-size: 16px;
		background-color: #111;
		border: none;
		outline: none;
		color: white;
		border: 1px solid var(--primary-transparent);
		width: 300px;
		border-radius: 24px;

		&:focus {
			border: 1px solid var(--primary);
		}
	}
`;

const Input = ({ label, name, value, onChange }) => {
	return (
		<StyledInput>
			<label htmlFor={name}>{label}</label>
			<input name={name} type='text' onChange={onChange} value={value} />
		</StyledInput>
	);
};

export default Input;
