import { useHistory } from 'react-router-dom';
import authStore from '../store/authStore';

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

    const pushLoggedUser = (): void => {
        const isLogged = authStore.isLogged;
        if (isLogged === true) {
            pushMain();
        } else {
            return;
        }
    }

    return {
        pushMain,
        pushSignUp,
        pushLogin,
        pushFindPW,
        pushLoggedUser,
    }
}
