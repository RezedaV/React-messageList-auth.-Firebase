import React from 'react';
import {Navigate, Outlet} from 'react-router'

const PublicRoute = ({authed}) => {
    return !authed ? <Outlet/> : <Navigate to='/profile' replace />
};

export default PublicRoute;