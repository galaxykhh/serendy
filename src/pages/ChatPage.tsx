import React, { useState, useEffect }  from 'react'
import ChatWindow from '../components/ChatPage/ChatWindow';
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'
import userStore from '../store/userStore';

const ChatPage: React.FC = () => {
    // 소켓에서 오는 메세지를 그대로 넣었을 때 렌더링이 통째로 되는 문제가 있어서
    // 해결방법을 찾다가 스테이트를 두개로 나눠서 동작하기로 했다.
    const [chatLog, setChatLog] = useState<string[]>([]); // 메세지 내역을 담아두는 배열
    const [recentChat, setRecentChat] = useState<string>(''); // 서버에서 갱신된 메세지를 담는 state

    useEffect(() => {
        console.log(recentChat);
    }, [recentChat]);// eslint-disable/line

    useEffect(() => {
        userStore.userSocket?.on('receive', (message) => {
            setRecentChat(message);
        })
    }, []); // eslint-disable/line

    useEffect(() => {
        recentChat.length > 0 && setChatLog([...chatLog, recentChat]);
        setRecentChat('');
    }, [recentChat]); // eslint-disable/line

    return (
        <Container>
            <CenterView>
                <ChatWindow chatlog={chatLog} />
            </CenterView>
        </Container>
    );
};

export default ChatPage;
