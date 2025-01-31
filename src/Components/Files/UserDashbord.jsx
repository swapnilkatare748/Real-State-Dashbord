import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

const UserDashbord = () => {

    const isLoggedIn ="true";

    return isLoggedIn==="true" ? <Outlet/> : <Navigate to="./login"/>;
}

export default UserDashbord
