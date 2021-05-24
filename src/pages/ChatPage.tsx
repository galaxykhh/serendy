import React from 'react'
import styled from 'styled-components';
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'
import MatchHandler from '../components/ChatPage/MatchHandler';
import ChatWindow from '../components/ChatPage/ChatWindow';
import chatStore from '../store/chatStore';
import { observer } from 'mobx-react';

const ChatPage: React.FC = observer(() => {
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
