
import { useRef, useState } from 'react'
import userStore from '../store/userStore';
import postRepository from '../repository/postRepository';

export interface IPost {
    account: string | null | undefined;
    nickName: string | null | undefined;
    content: string | undefined;
}

export const usePost = () => {
    const [isSent, setIsSent] = useState<boolean>(false);
    const textArea = useRef<HTMLTextAreaElement>(null);
    const [sentPosts, setSentPosts] = useState<any[]>([]);
    const [receivedPosts, setReceivedPosts] = useState<any[]>([]);

    const handlePost = async (): Promise<void> => {
        try {
            const data = {
                account: userStore.user?.account,
                nickName: userStore.user?.nickName,
                content: textArea.current?.value,
            }
            const response = await postRepository.sendPost(data);
            if ((response.data.message === 'Send Success')) {
                setIsSent(true);
            }
        } catch(err) {
            alert('서버가 점검중이에요');
        };
    };

    const getSentPosts = async (): Promise<void> => {
        try {
            const response = await postRepository.getSentPosts(userStore.user?.account);
            const posts = response.data;
            setSentPosts(posts);
        } catch(err) {
            console.log(err);
            return;
        }
    }

    const getReceivedPosts = async (): Promise<void> => {
        try {
            const response = await postRepository.getReceivePosts(userStore.user?.account);
            const posts = response.data;
            setReceivedPosts(posts);
        } catch(err) {
            console.log(err);
            return;
        }
    }

    const showReceivedPost = (): void => {
        
    }

    const showSentPost = async (postId: string): Promise<void> => {
        
    }

    return {
        isSent,
        textArea,
        sentPosts,
        receivedPosts,
        handlePost,
        getSentPosts,
        getReceivedPosts,
    }
}