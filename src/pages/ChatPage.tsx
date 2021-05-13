import React from 'react'
import ChatWindow from '../components/ChatPage/ChatWindow';
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'

const ChatPage: React.FC = () => {
    return (
        <Container>
            <CenterView>
                <ChatWindow />
            </CenterView>
        </Container>
    );
};

export default ChatPage;
