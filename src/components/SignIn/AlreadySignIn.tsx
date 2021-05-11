import React from 'react';
import styled from 'styled-components';
import { useHistorys } from '../../Hooks/useHistorys';
import { zoomIn } from '../../style/keyframes';

const AlreadySignIn: React.FC = () => {

    const history = useHistorys();

    return (
        <Box>
            <Msg>
                회원님은 이미
                <BoldMsg> 로그인</BoldMsg>
                {`이 `}
                <BoldMsg></BoldMsg>
                 되어 있습니다
            </Msg>
            <Button onClick={history.pushMain} > 메인페이지 </Button>
        </Box>
    )
}

export default AlreadySignIn;

const Box = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 640px;
    margin-left: -300px;
    margin-top: -300px;
    animation: ${zoomIn} .7s ease;
`;

const Msg = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
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