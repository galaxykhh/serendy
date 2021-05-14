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
    // 서버에서 오는 메세지를 그대로 넣었을 때 렌더링이 통째로 되는 문제가 있어서
    // 해결방법을 찾다가 스테이트를 나눠서 동작하기로 했다.
    const [chatLog, setChatLog] = useState<IRecentChat[]>([]); // 메세지 내역을 담아두는 배열
    const [recentChat, setRecentChat] = useState<IRecentChat>({ nickName: '', message: '', socketID: '' }); // 서버에서 보내주는 메세지를 담는 state
    const [chatFinished, setChatFinished] = useState<boolean>(false);
    const sendBtn = useRef<HTMLButtonElement>(null);
    const input = useRef<HTMLInputElement>(null);

    const handleEnter = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            sendBtn.current?.click();
        }
    }

    const handleSearch = (): void => {
        if (!isSearching) {
            setIsSearching(true);
            handleFind();
        } else { // 도중 취소
            setIsSearching(false);
            handleCancel();
        }
    }

    const getMatchedUser = (): void => {
        userStore.userSocket?.on('matched', strangerId => {
            setIsMatched(true);
            userStore.setOthersID(strangerId);
            setDisplay('visible');
            setChatLog([{
                nickName: 'SERENDY',
                message: '상대와 대화가 시작되었어요!',
                socketID: 'admin',
            }]);
        })
    }

    const handleSendMsg = (): void => {
        if (input.current?.value.length !== 0) {
            const nickName = userStore.user;
            const message = input.current?.value;
            const data = {
                nickName: nickName,
                message: message,
            }
            userStore.userSocket?.emit('chat', data, userStore.othersID);
            input.current!.value = ''

        } else {
            return;
        }
    }

    const handleReceiveMsg = () => {
        userStore.userSocket?.on('receive', (data, socketID)=> {
            setRecentChat({
                nickName: data.nickName,
                message: data.message,
                socketID: socketID,
            })
        })
    }

    const handlePushChat = (): void => {
        recentChat.message.length > 0 && setChatLog([...chatLog, recentChat]);
    }

    const handleCancel = (): void => {
        userStore.userSocket?.emit('cancel');
    }

    const handleFind = (): void => {
        userStore.userSocket?.emit('find');
    }

    const stopChat = (): void => {
        setChatFinished(true);
        userStore.setOthersID(null);
        setChatLog([{
            nickName: 'SERENDY',
            message: '대화가 종료되었어요!',
            socketID: 'admin',
        }]);
    }

    const reStart = (): void => {
        setChatLog([]);
        setIsSearching(false);
        setChatFinished(false);
        setIsMatched(false);
    }

    return {
        isSearching,
        isMatched,
        display,
        sendBtn,
        input,
        chatLog,
        recentChat,
        chatFinished,
        setRecentChat,
        setChatLog,
        handleEnter,
        handleSendMsg,
        handleSearch,
        handleReceiveMsg,
        handlePushChat,
        getMatchedUser,
        stopChat,
        setChatFinished,
        reStart,
        // startFind,
        // handleFind
    }
}