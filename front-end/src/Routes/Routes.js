import Footer from "../Components/Footer.jsx"
import Navbar from "../Components/Header/NavBar.jsx"

import Home from "../Components/Home.jsx"
import FormLogin from "../Components/Forms/FormLogin.jsx"
import Validation from "../Components/Forms/Validation.jsx"
import FormRegister from "../Components/Forms/FormRegister.jsx"
import CategorySection from "../Components/Categories/CategorySection.jsx"
import ExperienceDetail from "../Components/Recommendations/ExperienceDetail.jsx"
import Booking from "../Components/Booking/Booking.jsx"

export const routes = [
    {
        id: 1,
        path: "/home",
        Component: Home
    },
    {
        id: 2,
        path: "/category/:title/:id",
        Component: CategorySection
    },
    {
        id: 3,
        path: "/experience/:id",
        Component: ExperienceDetail
    },
    {
        id: 4,
        path: "/register",
        Component: FormRegister
    },
    {
        id: 5,
        path: "/login",
        Component: FormLogin
    },
    {
        id: 6,
        path: "/verify/:id",
        Component: Validation
    },
    {
        id:7,
        path :"/booking",
        Component:Booking
    }

];

export {Navbar, Footer};