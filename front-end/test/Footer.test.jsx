import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../src/Components/Footer.jsx";

describe("<Footer/>", () => {
	test("contenido renderizado", () => {
		const component = render(<Footer />);
		component.getByText("©2023 Digital Booking");
	});
});
