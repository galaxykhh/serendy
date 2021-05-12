import React, { useEffect } from 'react';
import styled, { Keyframes } from 'styled-components';
import { useChat } from '../../Hooks/useChat';

const PostWindow: React.FC = () => {
    const chat = useChat();

    return (
        <Row>
            <LetterBox>
                <Letter />
                <SenderBox>
                    <SendBtn ref={chat.sendBtn} >
                        편지 보내기
                    </SendBtn>
                </SenderBox>
            </LetterBox>

            <RuleContainer>
                        <BigMent> 어떤 사람이 내 편지를 받게 될까요 ? </BigMent>
                        <br />
                        <Rule>
                            <Ment size='18px'> · 편지는 수신자를 정할 수 없고 무작위로 한 사람에게 전달돼요 </Ment>
                            <Ment size='18px'> · 누군가 편지를 받게되면 나에게 답장을 보낼 수 있어요 </Ment>
                            <Ment size='18px'> · 답장이 끊기지 않는 한 계속 편지를 주고 받을 수 있어요 </Ment>
                            <Ment size='18px'> · 편지는 대화 형식으로 보관함에 저장돼요 </Ment>
                        </Rule>
                        <br />
            </RuleContainer>
            
        </Row>
    );
};

export default PostWindow;

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

const LetterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    height: 99%;
    @media only screen and (max-width: 1450px) {
        margin-right: 0px;
        height: 90%;
    }
`;

const Letter = styled.input`
    all: unset;
    width: 740px;
    height: 680px;
    min-width: 500px;
    background-color: ${({ theme }) => theme.colors.white20};
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.black};
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

const SendBtn = styled.button`
    all: unset;
    width: 100%;
    height: 50px;
    font-size: 18px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white20};
    border-radius: 30px;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white50};
    }
`;

const RuleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 300px;
    height: 740px;
    background-color: ${({ theme }) => theme.colors.white20};
    border: 1px solid ${({ theme }) => theme.colors.black};
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