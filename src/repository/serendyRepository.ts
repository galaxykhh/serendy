import axios, { AxiosResponse } from 'axios';
import { ISignUpData } from '../components/SignUp/SignUpBox';
import { ISignInData } from '../components/SignIn/SignInBox';
import { BASE_URL } from '../config'; // eslint-disable-line
import { IPassword } from '../components/MyPage/ChangePWBox';
import { INickName } from '../components/MyPage/ChangeNameBox';
import { IFindPW } from '../components/FindPW/FindPWBox';
import { IPost } from '../Hooks/usePost';

const serendyInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

serendyInstance.defaults.headers.common['authorization'] = localStorage.getItem('SerendyToken');

class SerendyRepository {

    accountCheck(account: string): Promise<AxiosResponse> {
        return serendyInstance.get(`/api/auth/check/${account}`);
    };

    signUp(data: ISignUpData): Promise<AxiosResponse> {
        return serendyInstance.post('/api/auth/signup', data);
    };

    signIn(data: ISignInData): Promise<AxiosResponse> {
        return serendyInstance.post('/api/auth/signin', data);
    };

    signInWidthToken(): Promise<AxiosResponse> {
        return serendyInstance.post('/api/auth/refresh');
    };

    changePassword(data: IPassword): Promise<AxiosResponse> {
        return serendyInstance.post('api/auth/changepw', data);
    };

    changeName(nickName: INickName): Promise<AxiosResponse> {
        return serendyInstance.post('api/auth/changename', nickName);
    };

    findPW(data: IFindPW): Promise<AxiosResponse> {
        return serendyInstance.post('api/auth/findpw', data);
    };

    sendPost(data: IPost): Promise<AxiosResponse> {
        return serendyInstance.post('api/post/send', data);
    }

    getSentPosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`api/post/sentposts/${account}`);
    };

    getReceivePosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`api/post/receiveposts/${account}`);
    };
};

const serendyRepository = new SerendyRepository();

export default serendyRepository;