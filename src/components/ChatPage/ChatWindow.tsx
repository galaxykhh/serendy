import React from 'react';
import styled from 'styled-components';
import { slideUp } from '../../style/keyframes';

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
                <BigMent> 버튼을 눌러 상대를 찾게되면 </BigMent>
                <BigMent> 낯선 누군가와 대화가 시작됩니다! </BigMent>
                <br />
                
                <Rule>
                    <Ment size='18px'> · 서로의 이름은 각각 설정된 닉네임으로 진행됩니다 </Ment>
                    <Ment size='18px'> · 상대가 마음에 들면 쪽지 요청을 보낼 수 있습니다 </Ment>
                    <Ment size='18px'> · 요청이 수락되면 채팅이 끝나도 쪽지를 주고 받을 수 있습니다 </Ment>
                    <Ment size='18px'> · 한명이라도 채팅방을 나가게되면 더 진행되지 않습니다 </Ment>
                </Rule>
                <br />
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
    @media only screen and (max-width: 1450px) {
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
    @media only screen and (max-width: 1450px) {
        margin-right: 0px;
        height: 90%;
    }
`;

const Screen = styled.div`
    width: 740px;
    height: 680px;
    min-width: 500px;
    background-color: ${({ theme }) => theme.colors.white20};
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1450px) {
        width: 99%;
        height: 70%;
        min-width: 300px;
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
    @media only screen and (max-width: 1450px) {
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
    @media only screen and (max-width: 400px) {
        width: 99%;
    }
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
    @media only screen and (max-width: 1450px) {
        width: 11%;
    }
    @media only screen and (max-width: 400px) {
        display: none;
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
    animation: ${slideUp} .7s ease;
    border-radius: 30px;
    @media only screen and (max-width: 1450px) {
        height: 70%;
    }
`;

const Rule = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Ment = styled.div<{ size?: string }>`
    font-size: 18px;
    margin-bottom: 10px;
    @media only screen and (max-width: 1520px) {
        font-size: 15px;
    }
`;

const BigMent = styled(Ment)`
    font-size: 30px;
    @media only screen and (max-width: 1520px) {
        font-size: 25px;
    }
`;

const StartBtn = styled(SendBtn)`
    width: 150px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid ${({ theme }) => theme.colors.white};
`;