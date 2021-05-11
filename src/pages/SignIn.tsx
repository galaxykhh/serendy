import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/publicComponents/Container';
import SignInBox from '../components/SignIn/SignInBox';
import authStore from '../store/authStore';
import AlreadySignIn from '../components/publicComponents/AlreadySignIn';
import { TEXTLOGO_URL } from '../config';

const SignIn: React.FC = observer(() => {

    return (
        <Container>
            {authStore.isSignIn ? <AlreadySignIn /> : 
                                  <>
                                    <TextLogo />
                                    <SignInBox />
                                  </>}
        </Container>
    );
});

export default SignIn;

const TextLogo = styled.div`
    width: 600px;
    height: 200px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
`;