import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import authStore from '../store/authStore';

const PrivateRoute: React.FC<any>= ({ children }) => {
    return (
        <Route
            render={() => authStore.isLogged ? (children) : (<Redirect to='/login' />)}
        />
    );
};

export default PrivateRoute;