import React from 'react';
import styled from 'styled-components';
import Container from '../components/PublicComponents/Container';
import FindPWBox from '../components/FindPW/FindPWBox';
import { TEXTLOGO_URL } from '../config';

const FindPW: React.FC = () => {
    return (
        <Container>
            <TextLogo />
            <FindPWBox />
        </Container>
    );
};

export default FindPW;

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