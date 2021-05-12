import { useState, useRef } from 'react'
import { VisibilityType } from '../config';

export const useChat = () => {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [isMatched, setIsMatched] = useState<boolean>(false);
    const [display, setDisplay] = useState<VisibilityType>('hidden');
    const sendBtn = useRef<HTMLButtonElement>(null);
    const inputBox = useRef<HTMLInputElement>(null);

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

    return {
        isSearching,
        isMatched,
        display,
        sendBtn,
        inputBox,
        handleSearch,
        handleMatch,
    }
}