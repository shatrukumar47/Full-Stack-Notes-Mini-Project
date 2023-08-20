import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    //Redux Store
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    console.log(isAuth)
    
    if(!isAuth){
        return <Navigate to={"/login"} />
    }

  return children;
}

export default PrivateRoute
