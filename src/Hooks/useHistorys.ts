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

    const pushSenderPage = (): void => {
        history.push('/sender');
    };

    const pushRecipientsPage = (): void => {
        history.push('/recipients');
    };

    const pushLoggedUser = (): void => {
        if (userStore.isSignIn) {
            history.push('/main');
        } else {
            return 
        }
    }

    return {
        pushStart,
        pushMain,
        pushSignUp,
        pushLogin,
        pushFindPW,
        pushMyPage,
        pushChatPage,
        pushPostPage,
        pushSenderPage,
        pushRecipientsPage,
        pushLoggedUser,
    }
}
