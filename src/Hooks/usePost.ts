
import { useRef, useState } from 'react'
import userStore from '../store/userStore';
import postRepository from '../repository/postRepository';

export interface IComment {
    _id: string | undefined;
    nickName: string | undefined;
    content: string | undefined;
}

export interface ISendComment {
    _id: string | undefined;
    toAccount: string | undefined;
    nickName: string | null | undefined;
    content: string | undefined;
};

export interface ISendPost {
    account: string | null | undefined;
    nickName: string | null | undefined;
    content: string | undefined;
};

export interface ICurrentPost {
    _id: string | undefined;
    toAccount: string | undefined;
    nickName: string | undefined;
    fromAccount: string | undefined;
    content: string | undefined;
    comment: IComment | undefined;
};

export const usePost = () => {
    const postArea = useRef<HTMLTextAreaElement>(null);
    const commentArea = useRef<HTMLTextAreaElement>(null);

    const [isSent, setIsSent] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sentPosts, setSentPosts] = useState<any[]>([]);
    const [receivedPosts, setReceivedPosts] = useState<any[]>([]);
    const [currentReceivedPost, setCurrentReceivedPost] = useState<ICurrentPost>();
    const [currentSentPost, setCurrentSentPost] = useState<ICurrentPost>();

    const handleLoading = (): void => {
        setIsLoading(!isLoading);
    };

    const handlePost = async (): Promise<void> => {
        try {
            const data = {
                account: userStore.user?.account,
                nickName: userStore.user?.nickName,
                content: postArea.current?.value,
            }
            if (postArea.current?.value === '' ) {
                return;
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

    const handleSentOne = (_id: string): void => {
        const post = sentPosts.findIndex(x => x._id === _id);
        setCurrentSentPost(sentPosts[post]);
    };

    const handleReceivedOne = (_id: string): void => {
        const post = receivedPosts.findIndex(x => x._id === _id);
        setCurrentReceivedPost(receivedPosts[post]);
    };

    const sendComment = async (): Promise<void> => {
        try {
            const data = {
                _id: currentReceivedPost?._id,
                toAccount: currentReceivedPost?.toAccount,
                nickName: userStore.user?.nickName,
                content: commentArea.current?.value,
            }
            if (commentArea.current?.value === '') {
                return;
            }
            const response = await postRepository.sendComment(data);
            if ((response.data.message === 'Success')) {
                const posts = response.data.data;
                setReceivedPosts(posts.posts);
                commentArea.current!.value = '';
            }
        } catch(err) {
            console.log(err);
            alert('서버 점검중입니다');
        };
    };

    return {
        isLoading,
        isSent,
        postArea,
        commentArea,
        sentPosts,
        receivedPosts,
        currentReceivedPost,
        currentSentPost,
        handleLoading,
        setIsSent,
        handlePost,
        getSentPosts,
        getReceivedPosts,
        handleSentOne,
        handleReceivedOne,
        sendComment,
    };
};