import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/publicComponents/Container';
import SignUpBox from '../components/SignUp/SignUpBox';
import Success from '../components/SignUp/Success';
import authStore from '../store/authStore';
import AlreadySignIn from '../components/publicComponents/AlreadySignIn';
import { TEXTLOGO_URL } from '../config';

const SignUp: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // is sign up success ?

    return (
        <Container>
        {!authStore.isSignIn ? 
            <>
                <TextLogo />
                {isSuccess ? <Success /> : <SignUpBox success={() => setIsSuccess(true)} />}
            </> : 
            <AlreadySignIn />}
        </Container>
    )
}

export default SignUp;

const TextLogo = styled.div`
    width: 600px;
    height: 200px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
`;