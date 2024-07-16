import React, {useContext, useState} from 'react'
import DropDownItem from './DropDownItem'
import { useNavigate } from 'react-router-dom'
import SessionService from "../../Services/Session.js"
import { GlobalStateContext } from '../Context/GlobalStateContext'
import { Perfil, DropdownMenu, UlDropDown } from '../../Styles/NavComponent'
import {Link} from "react-router-dom"

const NavProfile = () => {
    const [open, setOpen] = useState(false)
    const { state, state: { initials }, dispatch } = useContext(GlobalStateContext);
    const navigate = useNavigate()

    const handleLogout = async() =>{
        try{
            const status = await SessionService.logout(state.token);
            dispatch({type: "LOGOUT"});
            navigate("/home");
        }catch(error){
            console.log(error);
        }
    }

    const handleDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <Perfil onClick={() => {setOpen(!open)}}>
            <h3 id='loggedUser'>{initials.toUpperCase()}</h3>
            <DropdownMenu className={`dropdown-menu ${open? "active" : "inactive"}`}>
                <UlDropDown>
                    {
                        state.userInfo.role === "ADMIN"
                        ?
                        <DropDownItem click={handleDashboard} text={"Panel de Control"}/>
                        :
                        <Link to="/myprofile"><DropDownItem text={"Mi perfil"}/></Link>
                    }
                    <DropDownItem click={handleLogout} text={"Cerrar sesión"}/>
                </UlDropDown>
            </DropdownMenu>
        </Perfil> 
    )
}

export default NavProfile;