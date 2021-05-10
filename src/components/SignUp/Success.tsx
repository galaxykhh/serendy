import React from 'react';
import styled from 'styled-components';
import { useHistorys } from '../../Hooks/useHistorys';

const Success: React.FC = () => {

    const history = useHistorys();

    return (
        <Box data-aos='zoom-in'>
            <Msg data-aos='zoon-in'  >
                <BoldMsg>회원가입</BoldMsg>
                {`이 `}
                <BoldMsg>완료</BoldMsg>
                되었습니다
            </Msg>
            <Button onClick={history.pushLogin} > 시작하기 </Button>
        </Box>
    )
}

export default Success;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 640px;
`;

const Msg = styled.div`
    margin-top: 40px;
    margin-bottom: 80px;
    font-size: 35px;
    color: ${({ theme }) => theme.colors.black};
`;

const BoldMsg = styled.span`
    font-size: 35px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.black};
`;

const Button = styled.button`
    all: unset;
    width: 220px;
    height: 110px;
    border: 1px solid ${({ theme }) => theme.colors.white};
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
    }
`;