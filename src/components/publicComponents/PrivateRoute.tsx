import { observer } from 'mobx-react';
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import userStore from '../../store/userStore';

const PrivateRoute: React.FC<any>= observer(({ children }) => {
    return (
        <Route
            render={() => userStore.user ? (children) : (<Redirect to='/signin' />)}
        />
    );
});

export default PrivateRoute;