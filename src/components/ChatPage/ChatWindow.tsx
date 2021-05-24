import React, { useRef, useEffect } from 'react'
import styled, { Keyframes } from 'styled-components'
import { observer } from 'mobx-react'
import { VisibilityType } from '../../interfaces'
import { zoomIn, zoomOut } from '../../style/keyframes'
import userStore from '../../store/userStore'
import chatStore from '../../store/chatStore'
import MessageBox from './MessageBox'

const ChatWindow: React.FC = observer(() => {
    const sendBtn = useRef<HTMLButtonElement>(null);
    const input = useRef<HTMLInputElement>(null);
    const screen = useRef<HTMLDivElement>(null);

    const resetInput = (): void => {
        input.current!.value = '';
    };

    const handleEnter = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            sendBtn.current?.click();
        };
    };

    const handleSendMsg = (): void => {
        if (input.current?.value.length !== 0) {
            const nickName = userStore.user?.nickName;
            const message = input.current?.value;
            const data = { nickName, message };
            userStore.userSocket?.emit('chat', data);
            input.current!.value = '';
        } else {
            return;
        };
    };

    const scrollToBottom = (): void => {
        if (screen.current?.scrollHeight && screen.current?.clientHeight) {
            const scroll = screen.current.scrollHeight - screen.current.clientHeight;
            screen.current?.scrollTo(0, scroll);
        } else {
            return;
        };
    };

    useEffect(() => {
        chatStore.handleMatched();
        chatStore.handleReceiveMsg();
        chatStore.chatStopped();
    }, []); // eslint-disable-line

    useEffect(() => {
        resetInput();
    }, [chatStore.isFinished]) // eslint-disable-line

    useEffect(() => {
        return () => {
            chatStore.stopChat();
            chatStore.reset();
        }
    }, []); // eslint-disable-line

    useEffect(() => {
        chatStore.handlePushChat();
        scrollToBottom();
        chatStore.resetRecentChat();
    }, [chatStore.recentChat.message]); // eslint-disable-line

    return (
        <ChatBox animation={chatStore.isMatched ? zoomIn : zoomOut}
            visibility={chatStore.visible}
        >
            <Screen ref={screen} >
                {chatStore.chatLog.map((data, i) => (
                    <MessageBox message={data.message}
                        nickName={data.nickName}
                        socketID={data.socketID === userStore.socketID}
                        key={i}
                    />
                ))}
            </Screen>
            <SenderBox>
                <Input ref={input}
                    onKeyPress={handleEnter}
                />
                <SendBtn ref={sendBtn}
                    onClick={handleSendMsg}
                    disabled={chatStore.isFinished ? true : false}
                >
                    전송
                </SendBtn>
            </SenderBox>
        </ChatBox>
    );
});

export default ChatWindow;

const ChatBox = styled.div<{ animation: Keyframes, visibility: VisibilityType }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    height: 740px;
    min-height: 740px;
    visibility: ${({ visibility }) => visibility};
    animation: ${({ animation }) => animation} .7s ease forwards;
    @media only screen and (max-width: 1450px) {
        margin-right: 0px;
        min-height: 340px;
    };
    @media only screen and (max-width: 600px) {
        height: 100%;
    };
`;

const Screen = styled.div`
    width: 740px;
    height: 680px;
    max-height: 680px;
    background-color: ${({ theme }) => theme.colors.white10};
    border-radius: 10px;
    overflow-y: auto;
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
        width: 99%;
        min-width: 200px;
    };
`;

const Input = styled.input.attrs(({
    type: 'text',
    placeholder: '내용을 입력해주세요',
    autocomplete: 'off',
}))`
    all: unset;
    width: 84%;
    min-height: 50px;
    padding-left: 30px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white10};
    border-radius: 10px;
    @media only screen and (max-width: 600px) {
        width: 70%;
        font-size: 15px;
    };
`;

const SendBtn = styled.button`
    all: unset;
    width: 10%;
    height: 50px;
    font-size: 18px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.main60};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.plum};
        color: ${({ theme }) => theme.colors.black};
    }
    @media only screen and (max-width: 1450px) {
        font-size: 15px;
        width: 10%;
    };
    @media only screen and (max-width: 600px) {
        width: 18%;
    };
`;