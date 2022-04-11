import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button`
	margin-top: 5px;
	width: 28px;
	font-size: 6px;
	height: 12px;
	border: none;
	border-radius: 10px;
	background-color: deepskyblue;
	cursor: pointer;

	${(props) =>
		props.isRemovable &&
		css`
			background: white;
			color: red;
			width: 44px;
	`};
`;
