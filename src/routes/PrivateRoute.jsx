import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../pages/Shared/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <LoadingSpinner/>
    }
    if(user){
        return children
    }
    else{
        return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    }
};

export default PrivateRoute;