import { useState, useRef } from 'react'
import { VisibilityType, IRecentChat } from '../interfaces';
import userStore from '../store/userStore';


export const useChat = () => {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [isMatched, setIsMatched] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [display, setDisplay] = useState<VisibilityType>('hidden');
    const [chatLog, setChatLog] = useState<IRecentChat[]>([]);
    const [recentChat, setRecentChat] = useState<IRecentChat>({ nickName: '', message: '', socketID: '' });

    const handleCancel = (): void => {
        userStore.userSocket?.emit('cancel');
    };

    const handleFind = (): void => {
        userStore.userSocket?.emit('find');
    };

    const handleSearch = (): void => {
        if (!isSearching) {
            setIsSearching(true);
            handleFind();
        } else { // 도중 취소
            setIsSearching(false);
            handleCancel();
        };
    };

    

    const getMatchedUser = (): void => {
        userStore.userSocket?.on('matched', () => {
            setIsMatched(true);
            setDisplay('visible');
            setChatLog([{
                nickName: 'SERENDY',
                message: '상대와 대화가 시작되었어요!',
                socketID: 'admin',
            }]);
        });
    };

    const handleReceiveMsg = () => {
        userStore.userSocket?.on('receive', (data, socketID)=> {
            setRecentChat({
                nickName: data.nickName,
                message: data.message,
                socketID: socketID,
            });
        });
    };

    const handlePushChat = (): void => {
        recentChat.message.length > 0 && setChatLog([...chatLog, recentChat]);
    };

    const handleFinished = () => {
        setIsFinished(true);
        setRecentChat({
            nickName: 'SERENDY',
            message: '대화가 종료되었어요!',
            socketID: 'admin',
        });
    };

    const stopChat = (): void => {
        userStore.userSocket?.emit('stop chat');
        handleFinished();
    };

    const chatStopped = (): void => {
        userStore.userSocket?.on('is ended', () => {
            handleFinished();
        });
    };

    const reStart = (): void => {
        setChatLog([]);
        setIsSearching(false);
        setIsFinished(false);
        setIsMatched(false);
    };

    return {
        isSearching,
        isMatched,
        display,
        chatLog,
        recentChat,
        isFinished,
        setRecentChat,
        setChatLog,
        handleSearch,
        handleReceiveMsg,
        handlePushChat,
        getMatchedUser,
        stopChat,
        setIsFinished,
        reStart,
        chatStopped,
    };
};