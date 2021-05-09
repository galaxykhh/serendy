import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import LoginBox from '../components/Login/LoginBox';
import Aos from 'aos';
import 'aos/dist/aos.css';
const logoURL = '/images/serendy_text.png';

const Login: React.FC = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <Container>
            <TextLogo URL={logoURL}
                      data-aos='fade-down'
                      data-aos-duration='1000'
                      />
            <LoginBox />
        </Container>
    )
}

export default Login;

const TextLogo = styled.div<{ URL: string }>`
    width: 600px;
    height: 200px;
    background-image: url(${({ URL }) => URL});
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
`;