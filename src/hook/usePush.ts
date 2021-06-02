import { useHistory } from 'react-router-dom';

export const usePush = () => {
    const history = useHistory();

    const push = (path?: string | undefined) => {
        switch (path) {
            case 'main':
                history.push('/main');
                break;
            case 'signup':
                history.push('/signup');
                break;
            case 'signin':
                history.push('/signin');
                break;
            case 'findpw':
                history.push('/findpw');
                break;
            case 'mypage':
                history.push('/mypage');
                break;
            case 'chat':
                history.push('/chat');
                break;
            case 'post':
                history.push('/post');
                break;
            case 'sender':
                history.push('/sender');
                break;
            case 'recipients':
                history.push('/recipients');
                break;
            default:
                history.push('/');
                break;
        };
    };

    return { push };
};
