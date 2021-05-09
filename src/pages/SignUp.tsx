import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import SignUpBox from '../components/SignUp/SignUpBox';
import Aos from 'aos';
import 'aos/dist/aos.css';
const logoURL = '/images/serendy_text.png';

const SignUp: React.FC = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);

    return (
        <Container>
            <TextLogo URL={logoURL}/>
            <SignUpBox />
        </Container>
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