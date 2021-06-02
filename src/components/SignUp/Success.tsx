import React from 'react';
import styled from 'styled-components';
import { usePush } from '../../hook/usePush';
import { zoomIn } from '../../style/keyframes';

const Success: React.FC = () => {
    const { push } = usePush();

    return (
        <Box>
            <Msg>
                <BoldMsg>회원가입</BoldMsg>
                {`이 `}
                <BoldMsg>완료</BoldMsg>
                되었습니다
            </Msg>
            <Button onClick={() => push('signin')} > 시작하기 </Button>
        </Box>
    );
};

export default Success;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 640px;
    animation: ${zoomIn} .5s ease;
    @media only screen and (max-width: 600px) {
        width: 400px;
    };
`;

const Msg = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
    font-size: 35px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        font-size: 24px;
    };
`;

const BoldMsg = styled.span`
    font-size: 35px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        font-size: 25px;
    };
`;

const Button = styled.button`
    all: unset;
    width: 180px;
    height: 90px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.mainBlue};
    };
    @media only screen and (max-width: 600px) {
        width: 160px;
        height: 60px;
        font-size: 20px;
    };
`;