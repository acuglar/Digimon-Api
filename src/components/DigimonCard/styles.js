import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai';

export const Card = styled.div`
	padding: 10px;
	margin: 10px;
	background-color: rgb(98, 98, 98);
	border: 0.5px solid #ddd;
	border-radius: 20px;
	font-size: 10px;
	color: rgb(231, 231, 231);
`

export const Image = styled.img`
	width: 30px;
	height: 30px;
	margin: 10px 0;
	border-radius: 30px;
	object-fit: cover;
`

export const Star = styled(AiFillStar)`
	color: yellow;
	font-size: 18px;
	padding-top: 8px
`
