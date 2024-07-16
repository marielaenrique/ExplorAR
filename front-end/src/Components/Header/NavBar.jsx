import React, {Fragment, useContext, useState} from "react";
import NavProfile from "./NavProfile.jsx";
import FormsButtons from "./FormsButtons.jsx";
import { Link, Outlet } from 'react-router-dom';
import BrandIcon from "../../imgs/NavbarLogo.png"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalStateContext } from "../Context/GlobalStateContext.jsx";
import { useEffect } from "react";
import {Nav, SectionLeft, SectionRight, Logo, ButtonHamburger, Slogan} from "../../Styles/NavComponent.js";

const Navbar = () => {

    const {state} = useContext(GlobalStateContext)
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const ChangeClick = () => {
        setClick(!click)
    };

    const isMobile = window.innerHeight <= 600;
    useEffect(() => {
        setIsLoggedIn(state?.content === "logged");
      }, [state?.content]);

    return (
        <Fragment>
            <Nav>
                <Link to={"/"}>
                    <SectionLeft>
                            <Logo>
                                <img src={BrandIcon} alt="Logo"/>
                            </Logo>
                            <Slogan>Tu pasaporte a experiencias inolvidables</Slogan> 
                    </SectionLeft>
                </Link>
                <SectionRight>
                {isLoggedIn || isMobile ? null : (
            <ButtonHamburger onClick={() => ChangeClick()}>
              <FontAwesomeIcon icon={faBars} />
            </ButtonHamburger>
          )}
                    
                    {
                        state?.content === "logged" ? <NavProfile/> : <FormsButtons click={click}/>
                    }
                </SectionRight>
            </Nav>
            <Outlet/>
        </Fragment>
    )
}

export default Navbar;