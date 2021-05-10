import React, { useEffect } from 'react';
import styled from 'styled-components';
import AuthContainer from '../components/AuthContainer';
import LoginBox from '../components/SignIn/SignInBox';
import Aos from 'aos';
import 'aos/dist/aos.css';
const logoURL = '/images/serendy_text.png';

const SignIn: React.FC = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <AuthContainer>
            <TextLogo URL={logoURL}/>
            <LoginBox />
        </AuthContainer>
    )
}

export default SignIn;

const TextLogo = styled.div<{ URL: string }>`
    width: 600px;
    height: 200px;
    background-image: url(${({ URL }) => URL});
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
`;