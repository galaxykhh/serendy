import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/PublicComponents/Container';
import SignUpBox from '../components/SignUp/SignUpBox';
import Success from '../components/SignUp/Success';
import { TEXTLOGO_URL } from '../config';
import { observer } from 'mobx-react';

const SignUp: React.FC = observer(() => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // is sign up success ?

    return (
        <Container>
            <TextLogo />
            {isSuccess ? <Success /> : <SignUpBox submit={() => setIsSuccess(true)} />}
        </Container>
    );
});

export default SignUp;

const TextLogo = styled.div`
    width: 600px;
    height: 200px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
    @media only screen and (max-width: 600px) {
        margin-top: 80px;
        width: 300px;
        height: 130px;
    };
`;