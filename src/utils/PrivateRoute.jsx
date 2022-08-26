import React, {useContext} from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    // console.log(user)
    // let auth = {'token':false}
    return (
        user ? <Outlet /> : <Navigate to='/person/login' replace={true} />
    )
}