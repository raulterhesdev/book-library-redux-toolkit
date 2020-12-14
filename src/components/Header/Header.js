import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	background-color: #333;
	color: var(--primary);
	padding: 13px;
	display: flex;
	justify-content: center;
`;

const Header = () => {
	return (
		<StyledHeader>
			<h1>BookMania</h1>
		</StyledHeader>
	);
};

export default Header;
