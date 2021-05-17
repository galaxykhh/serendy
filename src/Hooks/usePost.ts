
import { useRef, useState } from 'react'
import serendyRepository from '../repository/serendyRepository';
import userStore from '../store/userStore';

export interface IPost {
    account: string | null | undefined;
    nickName: string | null | undefined;
    content: string | undefined;
}

export const usePost = () => {
    const [isSent, setIsSent] = useState<boolean>(false);
    const textArea = useRef<HTMLTextAreaElement>(null);
    const [sentPosts, setSentPosts] = useState<any[]>([]);
    const [receivePosts, setReceivePosts] = useState<any[]>([]);

    const handlePost = async (): Promise<void> => {
        try {
            const data = {
                account: userStore.user?.account,
                nickName: userStore.user?.nickName,
                content: textArea.current?.value,
            }
            const response = await serendyRepository.sendPost(data);
            if ((response.data.message === 'Send Success')) {
                setIsSent(true);
            }
        } catch(err) {
            alert('서버가 점검중이에요');
        };
    };

    const getSentPosts = async (): Promise<void> => {
        try {
            const response = await serendyRepository.getSentPosts(userStore.user?.account);
            const posts = response.data;
            setSentPosts(posts);
        } catch(err) {
            console.log(err);
            return;
        }
    }

    const getReceivePosts = async (): Promise<void> => {
        try {
            const response = await serendyRepository.getReceivePosts(userStore.user?.account);
            const posts = response.data;
            setReceivePosts(posts);
        } catch(err) {
            console.log(err);
            return;
        }
    }

    return {
        isSent,
        textArea,
        sentPosts,
        receivePosts,
        handlePost,
        getSentPosts,
        getReceivePosts,
    }
}