import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {GlobalStateContext} from "../Components/Context/GlobalStateContext"



const UserProtectedRoutes = () => {

    const {state} = useContext(GlobalStateContext)
    return state?.userInfo.role === "USER"? <Outlet/> : <Navigate to="/home"/>

}

export default UserProtectedRoutes;