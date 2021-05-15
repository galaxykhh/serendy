import { observer } from 'mobx-react';
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import userStore from '../../store/userStore';

const PrivateRoute: React.FC<any>= observer(({ children }) => {
    return (
        <Route
            render={() => userStore.isSignIn ? (children) : (<Redirect to='/login' />)}
        />
    );
});

export default PrivateRoute;