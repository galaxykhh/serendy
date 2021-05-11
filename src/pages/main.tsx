import { observer } from 'mobx-react';
import React, { useEffect } from 'react'
import authStore from '../store/authStore';
import { useHistorys } from '../Hooks/useHistorys';
import Container from '../components/publicComponents/Container';

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
        <Container>
            
        </Container>
    );
});

export default Main;
