import React from "react";
/* import "@testing-library/jest-dom/extend-expect"; */
import { fireEvent, render, screen } from "@testing-library/react";
import FormLogin from "../src/Components/Forms/FormLogin.jsx";
import GlobalStateContextProvider from "../src/Components/Context/GlobalStateContext.jsx";
import { BrowserRouter } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import SessionService from "../src/Services/Session.js";
import {
	FormManager,
	FormContainer,
	Container,
	Button,
	Input,
	Error,
	WrongValuesText,
} from "../src/Styles/FormLoginComponents.js";

test("Bton ingresar", () => {
	render(
		<GlobalStateContextProvider>
			<BrowserRouter>
				<FormLogin />
			</BrowserRouter>
		</GlobalStateContextProvider>
	);

	const btn = screen.getByText("Ingresar", {
		name: /ingresar/i,
	});
	const text = "Ingresar";

	expect(btn.textContent).toEqual(text);
});
