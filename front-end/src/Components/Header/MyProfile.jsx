import { GlobalStateContext } from '../Context/GlobalStateContext'
import React, {useContext} from 'react'
import {DivContainer,DivInformation} from '../../Styles/Myperfile'

function MyProfile(){
    const {state} = useContext(GlobalStateContext);


    return(
        <DivContainer>
            <DivInformation>
            <h2>Datos de mi perfil</h2>
            <p>Nombre : </p>
            <span>{state.userInfo.name}</span>
            <p>Apellido : </p>
            <span>{state.userInfo.lastName}</span>
            <p>Email : </p>
            <span>{state.userInfo.email}</span>
            </DivInformation>
        </DivContainer>
        
    )
}
export default MyProfile;