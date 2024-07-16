import React, { Fragment, useContext, useState, useEffect } from "react";
import NavProfile from "../src/Components/Header/NavProfile.jsx";
import FormsButtons from "../src/Components/Header/FormsButtons.jsx";
import BrandIcon from "../src/imgs/NavbarLogo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlobalStateContextProvider, {
	GlobalStateContext,
} from "../src/Components/Context/GlobalStateContext.jsx";
import {
	Nav,
	SectionLeft,
	SectionRight,
	Logo,
	ButtonHamburger,
	Slogan,
} from "../src/Styles/NavComponent.js";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, useNavigate, Link, Outlet } from "react-router-dom";
import Navbar from "../src/Components/Header/NavBar.jsx";

test("Click en imagen", () => {
	/* render(
		<GlobalStateContextProvider>
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		</GlobalStateContextProvider>
	);
	const image = screen.getByAltText("Logo"); 
	const text = screen.getByText("Tu pasaporte a experiencias inolvidables"); 
	image;
	fireEvent.click(text);

	expect(window.location.pathname).toEqual("/");  */
});
