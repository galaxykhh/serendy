import { useHistory } from 'react-router-dom';

export const useHistorys = () => {
    const history = useHistory();

    const pushStart = ():void => {
        history.push('/')
    }

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

    const pushSignInUser = (userStatus: boolean): void => {
        if (!userStatus) {
            return;
        } else {
            alert('이미 로그인이 되었어요!');
            history.push('/main');;
        };
    };

    return {
        pushStart,
        pushMain,
        pushSignUp,
        pushLogin,
        pushFindPW,
        pushSignInUser,
    }
}
