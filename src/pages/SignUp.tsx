import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import SignUpBox from '../components/SignUp/SignUpBox';
import Success from '../components/SignUp/Success';
import Aos from 'aos';
import 'aos/dist/aos.css';
const logoURL = '/images/serendy_text.png';

const SignUp: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(true); // is sign up success ?

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    return (
        <Container>
            <TextLogo URL={logoURL}/>
            {isSuccess ? <Success /> : <SignUpBox success={() => setIsSuccess(true)} />}
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