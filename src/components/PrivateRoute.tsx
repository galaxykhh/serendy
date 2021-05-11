import { observer } from 'mobx-react';
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import authStore from '../store/authStore';

const PrivateRoute: React.FC<any>= observer(({ children }) => {

    return (
        <Route
            render={() => authStore.isSignIn ? (children) : (<Redirect to='/login' />)}
        />
    );
});

export default PrivateRoute;