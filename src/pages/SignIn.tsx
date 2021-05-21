import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/publicComponents/Container';
import SignInBox from '../components/SignIn/SignInBox';
import { TEXTLOGO_URL } from '../config';
import { DisplayType } from '../interfaces';
import userStore from '../store/userStore';
import { useHistorys } from '../Hooks/useHistorys';

const SignIn: React.FC = observer(() => {

    const history = useHistorys();

    useEffect(() => {
        userStore.signInWithToken(history.pushLoggedUser);
    }, []); //eslint-disable-line

    return (
        <Container>
            <TextLogo display={userStore.isLogging ? 'none' : 'block'} />
            <SignInBox />
        </Container>
    );
});

export default SignIn;

const TextLogo = styled.div<{
    display: DisplayType
}>`
    width: 600px;
    height: 200px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
    display: ${({ display }) => display};
    @media only screen and (max-width: 600px) {
        margin-top: 80px;
        width: 300px;
        height: 130px;
    };
`;