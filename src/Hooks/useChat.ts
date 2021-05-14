import { useState, useRef } from 'react'
import { VisibilityType } from '../type';
import userStore from '../store/userStore';

export interface IRecentChat {
    nickName: string;
    message: string;
    socketID: string;
}

export const useChat = () => {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [isMatched, setIsMatched] = useState<boolean>(false);
    const [display, setDisplay] = useState<VisibilityType>('hidden');
    // 소켓에서 오는 메세지를 그대로 넣었을 때 렌더링이 통째로 되는 문제가 있어서
    // 해결방법을 찾다가 스테이트를 나눠서 동작하기로 했다.
    const [chatLog, setChatLog] = useState<IRecentChat[]>([]); // 메세지 내역을 담아두는 배열
    const [recentChat, setRecentChat] = useState<IRecentChat>({ nickName: '', message: '', socketID: '' }); // 서버에서 보내주는 메세지를 담는 state
    const sendBtn = useRef<HTMLButtonElement>(null);
    const input = useRef<HTMLInputElement>(null);

    const handleEnter = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            sendBtn.current?.click();
        }
    }

    const showChat = (): void => {
        setDisplay('visible');
    }

    const handleBtn = (): void => {
        setIsSearching(!isSearching);
        setIsMatched(!isMatched); // 채팅개발하게되면 수정
    };

    const handleSearch = (): void => {
        if (display === 'hidden') {
            showChat();
            handleBtn();
        } else {
            handleBtn();
        }
    };

    const handleMatch = (): void => {
        setIsMatched(true);
    }

    const handleSendMsg = (): void => {
        if (input.current?.value.length !== 0) {
            const nickName = userStore.user;
            const message = input.current?.value;
            const data = {
                nickName: nickName,
                message: message,
            }
            userStore.userSocket?.emit('chat', data);
            input.current!.value = ''

        } else {
            return;
        }
    }

    const handleReceive = () => {
        userStore.userSocket?.on('receive', (data, socketID)=> {
            setRecentChat({
                nickName: data.nickName,
                message: data.message,
                socketID: socketID,
            })
        })
    }

    const handlePushChat = () => {
        recentChat.message.length > 0 && setChatLog([...chatLog, recentChat]);
    }
    


    return {
        isSearching,
        isMatched,
        display,
        sendBtn,
        input,
        chatLog,
        recentChat,
        setRecentChat,
        setChatLog,
        handleEnter,
        handleSendMsg,
        handleSearch,
        handleMatch,
        handleReceive,
        handlePushChat,
    }
}