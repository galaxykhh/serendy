import React, { useState } from 'react';
import styled from 'styled-components';
import AuthContainer from '../components/AuthContainer';
import SignUpBox from '../components/SignUp/SignUpBox';
import Success from '../components/SignUp/Success';
import authStore from '../store/authStore';
import AlreadySignIn from '../components/SignIn/AlreadySignIn';
const logoURL = '/images/serendy_text.png';

const SignUp: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // is sign up success ?

    return (
        <AuthContainer>
        {!authStore.isSignIn ? 
            <>
                <TextLogo URL={logoURL}/>
                {isSuccess ? <Success /> : <SignUpBox success={() => setIsSuccess(true)} />}
            </> : 
            <AlreadySignIn />}
        </AuthContainer>
    )
}

export default SignUp;

const TextLogo = styled.div<{ URL: string }>`
    width: 600px;
    height: 200px;
    background-image: url(${({ URL }) => URL});
    background-size: cover;
    background-position: center;
`;