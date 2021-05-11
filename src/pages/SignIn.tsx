import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import AuthContainer from '../components/AuthContainer';
import SignInBox from '../components/SignIn/SignInBox';
const logoURL = '/images/serendy_text.png';

const SignIn: React.FC = observer(() => {

    return (
        <AuthContainer>
            <TextLogo URL={logoURL}/>
            <SignInBox />
        </AuthContainer>
    );
});

export default SignIn;

const TextLogo = styled.div<{ URL: string }>`
    width: 600px;
    height: 200px;
    background-image: url(${({ URL }) => URL});
    background-size: cover;
    background-position: center;
    margin-bottom: 40px;
`;