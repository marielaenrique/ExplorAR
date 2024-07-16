import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {GlobalStateContext} from "../Components/Context/GlobalStateContext"



const AdminProtectedRoutes = () => {

    const {state} = useContext(GlobalStateContext)
    return state?.userInfo.role === "ADMIN"? <Outlet/> : <Navigate to="/home"/>

}

export default AdminProtectedRoutes;