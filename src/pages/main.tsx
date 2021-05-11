import { observer } from 'mobx-react';
import React, { useEffect } from 'react'
import authStore from '../store/authStore';
import { useHistorys } from '../Hooks/useHistorys';
import AuthContainer from '../components/AuthContainer';

const Main: React.FC = observer(() => {

    const history = useHistorys();

    const pushUser = (userStatus: boolean) => {
        if (userStatus) {
            return;
        } else {
            history.pushStart();
        }
    }

    useEffect(() => {
        pushUser(authStore.isSignIn);
    }, [authStore.isSignIn]); // eslint-disable-line

    return (
        <AuthContainer>

        </AuthContainer>
    );
});

export default Main;
