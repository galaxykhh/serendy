
import { useRef, useState } from 'react'
import userStore from '../store/userStore';
import postRepository from '../repository/postRepository';
import { IComment } from '../components/SenderPage/View';

export interface ISendPost {
    account: string | null | undefined;
    nickName: string | null | undefined;
    content: string | undefined;
}

export interface ICurrentPost {
    _id: string;
    toAccount: string;
    nickName: string;
    fromAccount: string;
    content: string;
    comment: IComment | undefined;
}

export const usePost = () => {
    const [isSent, setIsSent] = useState<boolean>(false);
    const textArea = useRef<HTMLTextAreaElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sentPosts, setSentPosts] = useState<any[]>([]);
    const [receivedPosts, setReceivedPosts] = useState<any[]>([]);
    const [currentPost, setCurrentPost] = useState<ICurrentPost>();

    const handleLoading = (): void => {
        setIsLoading(!isLoading);
    };

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
        setIsLoading(true);
        try {
            const response = await postRepository.getSentPosts(userStore.user?.account);
            const data = response.data;
            setSentPosts(data);
            setIsLoading(false);
        } catch(err) {
            console.log(err);
            return;
        };
    };

    const getReceivedPosts = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await postRepository.getReceivePosts(userStore.user?.account);
            const posts = response.data;
            setReceivedPosts(posts);
            setIsLoading(false);
        } catch(err) {
            console.log(err);
            return;
        };
    };

    const showSentOne = (_id: string): void => {
        const post = sentPosts.find(x => x._id === _id);
        setCurrentPost(post);
        console.log(post);
    };

    const showReceivedOne = (_id: string): void => {
        const post = receivedPosts.find(x => x._id === _id);
        setCurrentPost(post);
        console.log(post);
    };

    return {
        isLoading,
        isSent,
        textArea,
        sentPosts,
        receivedPosts,
        currentPost,
        handleLoading,
        setIsSent,
        handlePost,
        getSentPosts,
        getReceivedPosts,
        showSentOne,
        showReceivedOne,
    };
};