
import React from 'react'
import { ButtonNav, Ul } from '../../Styles/NavComponent'
import { Link, useLocation } from 'react-router-dom'
import {faUser,faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormsButtons = ({click}) => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <Ul click={click ? "click" : undefined}>
            {path !== "/register" && (
                <li>
                    <Link to={"/register"}>
                        <ButtonNav>Registrarte <FontAwesomeIcon icon={faUserPlus} />
                        </ButtonNav>
                    </Link>
                </li>
            )}
            {path !== "/login" && (
                <li>
                    <Link to={"/login"}>
                        <ButtonNav id="btnLogin">Iniciar Sesion  <FontAwesomeIcon icon={faUser} />
                        </ButtonNav>
                    </Link>
                </li>
            )}
        </Ul>
    )
}

export default FormsButtons;