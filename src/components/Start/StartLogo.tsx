import React from 'react';
import styled from 'styled-components';
import { arrowPop, zoomIn } from '../../style/keyframes';
const logoURL = '/images/start_logo.png';

const StartLogo: React.FC<{ push: () => void }>= ({ push }) => {

    return (
        <LogoBox>
            <Logo URL={logoURL} />
            <StartBtn onClick={push}> 시작하기 </StartBtn>
            <Arrow> ∨ </Arrow>
        </LogoBox>
    )
}

export default StartLogo;

const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 300px;
`;

const Logo = styled.div<{ URL: string }>`
    width: 800px;
    height: 800px;
    background-image: url(${({ URL }) => URL});
    background-size: cover;
    background-position: center;
    animation: ${zoomIn} 1s ease;
`;

const Arrow = styled.div`
    font-size: 30px;
    text-align: center;
    animation: ${arrowPop} 0.5s alternate infinite;
`;

const StartBtn = styled.button`
    all: unset;
    width: 160px;
    height: 70px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    text-align: center;
    margin-bottom: 50px;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.mainBlue};
    }
`;