import { observer } from 'mobx-react';
import React from 'react'
import ChatWindow from '../components/ChatPage/ChatWindow';
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'

const ChatPage: React.FC = observer(() => {
    return (
        <Container>
            <CenterView>
                <ChatWindow />
            </CenterView>
        </Container>
    );
});

export default ChatPage;
