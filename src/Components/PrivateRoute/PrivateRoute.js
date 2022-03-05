import React from 'react';
import {Navigate, Outlet} from 'react-router'

const PrivateRoute = ({authed}) => {
    return authed ? <Outlet/> : <Navigate to='/' replace />
};

export default PrivateRoute;