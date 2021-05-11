import React from 'react';
import styled from 'styled-components';
import { zoomIn } from '../../style/keyframes';

const ChatWindow: React.FC = () => {
    return (
        <Row>
            <Column>
            <Screen />
            <SenderBox>
                <Input />
                <SendBtn>
                    전송
                </SendBtn>
            </SenderBox>
            </Column>
            <HandlerContainer>
                <Ment> 상대를 찾기 시작하면 </Ment>
                <Ment> 낯선 상대와 대화를 시작합니다 </Ment>
                <StartBtn> 상대 찾기 </StartBtn>
            </HandlerContainer>
        </Row>
    );
};

export default ChatWindow;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 200px;
    @media only screen and (max-width: 1260px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 1260px) {
        margin-right: 0px;
        height: 800px;
    }
`;

const Screen = styled.div`
    width: 740px;
    min-width: 500px;
    height: 680px;
    background-color: ${({ theme }) => theme.colors.white20};
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1260px) {
        width: 99%;
        min-width: 300px;
        height: 310px;
        transform: translateY(-5px);
    };
`;

const SenderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 740px;
    min-width: 500px;
    height: 50px;
    @media only screen and (max-width: 1260px) {
        width: 98%;
        min-width: 200px;
    }
`;

const Input = styled.input`
    all: unset;
    width: 84%;
    min-height: 50px;
    padding-left: 30px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white20};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 30px;
`;

const SendBtn = styled.button`
    all: unset;
    width: 10%;
    height: 50px;
    font-size: 18px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white20};
    border-radius: 30px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
    }
    @media only screen and (max-width: 1260px) {
        width: 12%;
    }
`;

const HandlerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 300px;
    height: 740px;
    background-color: ${({ theme }) => theme.colors.white20};
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    @media only screen and (max-width: 1260px) {

    }
`;

const Ment = styled.div<{ size?: string }>`
    font-size: ${({ size }) => size || '20px'};
    margin-bottom: 10px;
    animation: ${zoomIn} .5s ease;
`;

const StartBtn = styled(SendBtn)`
    width: 200px;
    height: 100px;
`;