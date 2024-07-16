/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css";
import { SocialIcon} from "react-social-icons";
import { FooterContainer, FooterDiv,Copyright,IconsDiv} from "../Styles/FooterComponents";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterDiv>
				<Copyright>©2023 ExplorAR</Copyright>
				<IconsDiv>
					<SocialIcon style={{ height: 30, width: 30}} network="facebook"  bgColor="White" />
					<SocialIcon style={{ height: 30, width: 30}} network="linkedin" bgColor="white" />
					<SocialIcon style={{ height: 30, width: 30}} network="twitter" bgColor="white" />
					<SocialIcon style={{ height: 30, width: 30}} network="instagram" bgColor="white" />
				</IconsDiv>
			</FooterDiv>
		</FooterContainer>
	);
};

export default Footer;
