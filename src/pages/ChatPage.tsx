import React, { useState, useEffect }  from 'react'
import ChatWindow from '../components/ChatPage/ChatWindow';
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'
import userStore from '../store/userStore';

export interface IRecentChat {
    nickName: string;
    message: string;
}

const ChatPage: React.FC = () => {
    // 소켓에서 오는 메세지를 그대로 넣었을 때 렌더링이 통째로 되는 문제가 있어서
    // 해결방법을 찾다가 스테이트를 두개로 나눠서 동작하기로 했다.
    const [chatLog, setChatLog] = useState<IRecentChat[]>([]); // 메세지 내역을 담아두는 배열
    const [recentChat, setRecentChat] = useState<IRecentChat>({ nickName: '', message: '' }); // 서버에서 갱신된 메세지를 담는 state

    
    useEffect(() => {
        userStore.userSocket?.on('receive', data => {
            setRecentChat({ 
                nickName: data.nickName,
                message: data.message,
            });
        })
    }, []); // eslint-disable/line

    useEffect(() => {
        recentChat.message.length > 0 && setChatLog([...chatLog, recentChat]);
        setRecentChat({ nickName: '', message: '' });
    }, [recentChat.message]); // eslint-disable-line

    return (
        <Container>
            <CenterView>
                <ChatWindow chatlog={chatLog} />
            </CenterView>
        </Container>
    );
};

export default ChatPage;
