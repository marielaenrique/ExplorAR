import { DivContainer,DivText ,EmojiText,MsjError,EmojiTextError,DivMsjError} from "../../Styles/Validation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faCheckCircle , faXmark} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect} from "react";
import SessionService from '../../Services/Session.js';

function Validation(){
    const location = useLocation();
    const [response,setResponse] = useState();



    useEffect(() => {
        const currentPath = location.pathname;
        const pathSegments = currentPath.split("/");

        const verifyEmail = async () => {
            const status = await SessionService.verify(pathSegments[2]);
            setResponse(status);
            console.log(response)
        };

        if(pathSegments[1] === "verify"){
            verifyEmail();
        }
    },[])
    console.log(response)


    return(
        <>
        
        {
            response === 200 ? 
            <DivContainer>
            <h1>¡Su cuenta ha sido verificada con exito!</h1>
            <DivText>
            <EmojiText><FontAwesomeIcon icon={faCheckCircle}/></EmojiText>
            <h2>Bienvenido a ExplorAR</h2>
            <p>Esperamos que esta web sea de su agrado, solo le queda iniciar sesion para que comience su aventura</p>
            </DivText>
            <Link to={"/login"}>
                        <button>Iniciar Sesion</button>
            </Link>
        </DivContainer>
        :
        <DivMsjError>
            <MsjError>Error al verificar Email <EmojiTextError><FontAwesomeIcon icon={faXmark}/></EmojiTextError></MsjError>
        </DivMsjError>
        }
        </>

    )
}
export default Validation;