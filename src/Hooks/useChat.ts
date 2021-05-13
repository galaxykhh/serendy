import { useState, useRef } from 'react'
import { VisibilityType } from '../type';
import userStore from '../store/userStore';

export const useChat = () => {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [isMatched, setIsMatched] = useState<boolean>(false);
    const [display, setDisplay] = useState<VisibilityType>('hidden');
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
            userStore.userSocket?.emit('chat', input.current?.value);
            input.current!.value = ''
        } else {
            return;
        }
    }
    


    return {
        isSearching,
        isMatched,
        display,
        sendBtn,
        input,
        handleEnter,
        handleSendMsg,
        handleSearch,
        handleMatch,
    }
}