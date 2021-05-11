import { useHistory } from 'react-router-dom';

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
