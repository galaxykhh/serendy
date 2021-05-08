import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container';

const Start: React.FC = () => {
    const history = useHistory();

    const pushMain = () => {
        history.push('/main');
    }

    return (
        <Container>
            <Logo className='logo'> MEET </Logo>
            <Btn onClick={pushMain} >
                시작하기
            </Btn>
        </Container>
    )
}

export default Start

const Logo = styled.div`
    margin-top: 300px;
    margin-bottom: 70px;
    font-size: 100px;
`;

const Btn = styled.button`
    all: unset;
    width: 200px;
    height: 70px;
    border-radius: 40px;
    background-color: ${props => props.theme.colors.mainBlue};
    color: ${props => props.theme.colors.white};
    font-size: 30px;
    text-align: center;
    cursor: pointer;
`;