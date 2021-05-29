import React, { useEffect } from 'react'
import styled from 'styled-components';
import CenterView from '../components/SharedComponents/CenterView'
import Container from '../components/SharedComponents/Container'
import MatchHandler from '../components/ChatPage/MatchHandler';
import ChatWindow from '../components/ChatPage/ChatWindow';
import chatStore from '../store/chatStore';
import { observer } from 'mobx-react';
import userStore from '../store/userStore';
import { io } from 'socket.io-client';
import { BASE_URL } from '../config';

const ChatPage: React.FC = observer(() => {

    useEffect(() => {
        if (userStore.user) {
            userStore.setUserSocket(io(BASE_URL));
            userStore.saveSocketID();
        }; 
        return () => {
            userStore.userSocket?.disconnect();
            userStore.setSocketID(null);
        };
    }, [userStore.user]); //eslint-disable-line

    useEffect(() => {
        chatStore.handleMatched();
        chatStore.handleReceiveMsg();
        chatStore.chatStopped();
    }, []); // eslint-disable-line

    useEffect(() => {
        return () => {
            chatStore.stopChat();
            chatStore.reset();
        };
    }, []); // eslint-disable-line

    return (
        <Container>
            <CenterView>
                <ChatBox>
                    <ChatWindow />
                    <HandlerBox>
                        <MatchHandler isSearching={chatStore.isSearching} 
                            isMatched={chatStore.isMatched}
                            isFinished={chatStore.isFinished}
                        />
                    </HandlerBox>
                </ChatBox>
            </CenterView>
        </Container>
    );
});

export default ChatPage;

const ChatBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 1450px) {
        flex-direction: column;
    };
    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
    };
`;

const HandlerBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 300px;
    height: 740px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.main60};
    @media only screen and (max-width: 1450px) {
        height: 70%;
    };
`;
