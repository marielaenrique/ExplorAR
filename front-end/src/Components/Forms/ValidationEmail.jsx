import {DivContainer,DivText ,EmojiText} from "../../Styles/ValidationEmail"
import SessionService from '../../Services/Session.js';

function ValidationEmail({email}){

    const handleResend = async() => {
        try{
            const response = await SessionService.resend(email);
            console.log(response)
        }catch(error){
            console.log(error)
        }

    }
    return(
        <DivContainer>
            <h1>Verificación de Cuenta</h1>
            <DivText>
            <EmojiText>✉</EmojiText>
            <h2>Estas a un paso de acceder a experiencias inolvidables</h2>
            <p>Te enviaremos un mail a {email} el cual  tendrá un link para verificar tu cuenta</p>
            </DivText>
            <p>No recibiste el correo?
            <a href="#" onClick={handleResend}> Haz click aquí para reenviar</a>
            </p>
        </DivContainer>
    )
}
export default ValidationEmail;