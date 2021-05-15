import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/publicComponents/Container';
import SignUpBox from '../components/SignUp/SignUpBox';
import Success from '../components/SignUp/Success';
import { TEXTLOGO_URL } from '../config';
import { observer } from 'mobx-react';
import { useHistorys } from '../Hooks/useHistorys';

const SignUp: React.FC = observer(() => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // is sign up success ?
    const history = useHistorys();

    history.pushLoggedUser();
    
    return (
        <Container>
            <>
                <TextLogo />
                {isSuccess ? <Success /> : <SignUpBox success={() => setIsSuccess(true)} />}
            </>
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
`;