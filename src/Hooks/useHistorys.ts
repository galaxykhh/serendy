import { useHistory } from 'react-router-dom';

export const useHistorys = () => {
    const history = useHistory();

    const pushStart = ():void => {
        return history.push('/');
    };

    const pushMain = (): void => {
        return history.push('/main');
    };

    const pushSignUp = (): void => {
        return history.push('/signup');
    };

    const pushLogin = (): void => {
        return history.push('/login');
    };

    const pushFindPW = (): void => {
        return history.push('/findpw');
    };

    return {
        pushStart,
        pushMain,
        pushSignUp,
        pushLogin,
        pushFindPW,
    }
}
