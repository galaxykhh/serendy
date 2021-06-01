import React, { useEffect } from 'react';
import { flowResult } from 'mobx';
import { observer } from 'mobx-react';
import Container from '../components/SharedComponents/Container';
import SignInBox from '../components/SignIn/SignInBox';
import userStore from '../store/userStore';
import { usePush } from '../hook/usePush';
const SignIn: React.FC = observer(() => {
    const { push } = usePush('main');

    const signInWithToken = async () => {
        const isSuccess = await flowResult(userStore.signInWithToken());
        if (isSuccess) push();
    };

    useEffect(() => {
        signInWithToken();
    }, []); //eslint-disable-line

    return (
        <Container>
            <SignInBox />
        </Container>
    );
});

export default SignIn;