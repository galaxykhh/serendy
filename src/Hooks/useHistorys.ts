import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userStore from '../store/userStore';

export const useHistorys = () => {
    const history = useHistory();

    const pushStart = ():void => {
        history.push('/');
    };

    const pushMain = (): void => {
        history.push('/main');
    };

    const pushSignUp = (): void => {
        history.push('/signup');
    };

    const pushLogin = (): void => {
        history.push('/login');
    };

    const pushFindPW = (): void => {
        history.push('/findpw');
    };

    const pushMyPage = (): void => {
        history.push('/mypage');
    }

    const pushChatPage = (): void => {
        history.push('/chat');
    };

    const pushPostPage = (): void => {
        history.push('/post');
    }

    const pushLoggedUser = (): void => {
        if (userStore.isSignIn) {
            history.push('/main');
        } else {
            return 
        }
    }

    useEffect(() => {
        pushLoggedUser();
    }, [userStore.isSignIn]); // eslint-disable-line

    return {
        pushStart,
        pushMain,
        pushSignUp,
        pushLogin,
        pushFindPW,
        pushMyPage,
        pushChatPage,
        pushPostPage,
    }
}
