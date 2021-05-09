import { useHistory } from 'react-router-dom';

export const useHistorys = () => {
    const history = useHistory();

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
    }

    return {
        pushMain,
        pushSignUp,
        pushLogin,
        pushFindPW,
    }
}
