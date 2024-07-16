import styled from "styled-components";

export const CardImgBanner = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url(${(props) => props.img});
	height:150px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-left-radius:10px;
	border-top-right-radius:10px;
	background-size: cover;
	background-position: center;
	position: relative;
	--opacidad-negro: 0;
	transition: background-image 0.3s ease-in-out;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 8px;
	width: 265px;
	margin-left: 10px;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	margin: 15px 0px;
	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.035);
	}

	h1 {
		color:white;
		text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
		0px 8px 13px rgba(0,0,0,0.1),
		0px 18px 23px rgba(0,0,0,0.1);
		z-index: 1;
	}

	div p {
		padding:8px;
		text-align:center;
		height: 110px;
		color:black;
	}

	@media screen and (max-width: 500px) {
		margin-left: 87px;
	}

	&:hover ${CardImgBanner} {
		--opacidad-negro: 0.5;
	}
	@media (max-width:920px){
		margin-left: 60px;
	}

`;

export const CardContainer = styled.div`
	margin-left: 70px;
	@media (max-width:1290px){
		margin-left: 120px;
	}
	@media (max-width:1100px){
		margin-left: 50px;
	} 
	@media (max-width:910px){
		margin-left: 10px;
	}
`;



export const Title = styled.h2`
	color: rgb(57, 57, 83);
	text-shadow: 2px 2px 2pt rgba(0, 0, 0, 0.2);
	margin-left: 35px;
`;