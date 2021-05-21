import React from 'react';
import styled from 'styled-components';
import { LOGO_URL } from '../../config';
import { arrowPop } from '../../style/keyframes';

const StartLogo: React.FC<{ push: () => void }>= ({ push }) => {

    return (
        <LogoBox>
            <Logo data-aos='zoom-in-down'
                  data-aos-duration='1000'
                  />
            <StartBtn onClick={push}> 시작하기 </StartBtn>
            <Arrow> ∨ </Arrow>
        </LogoBox>
    );
};

export default StartLogo;

const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-bottom: 50px;
    margin-bottom: 300px;
`;

const Logo = styled.div`
    width: 700px;
    height: 700px;
    background-image: url(${LOGO_URL});
    background-size: cover;
    background-position: center;
    @media only screen and (max-width: 500px) {
        width: 450px;
        height: 450px;
    }
`;

const Arrow = styled.div`
    font-size: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
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
    };
    @media only screen and (max-width: 500px) {
        width: 120px;
        height: 50px;
        font-size: 20px;
    }
`;