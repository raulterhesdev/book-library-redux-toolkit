import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
	background-color: var(--primary);
	color: white;

	padding: 16px 32px;
	border: none;
	border-radius: 24px;

	&:hover {
		background-color: var(--primary-transparent);
	}
`;

const SecondaryButton = styled.button`
	background-color: transparent;
	position: absolute;
	top: 0;
	right: 0;
	padding: 16px;
	margin: 8px;
	color: var(--primary);
	border: none;

	&:hover {
		color: var(--primary-transparent);
	}
`;

const Button = ({ onClick, children, isPrimary }) => {
	const StyledButton = isPrimary ? PrimaryButton : SecondaryButton;
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
