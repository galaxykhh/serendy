import axios, { AxiosResponse } from 'axios';
import { ISignUpData } from '../components/SignUp/SignUpBox';
import { ISignInData } from '../components/SignIn/SignInBox';
import { BASE_URL } from '../config'; // eslint-disable-line
import { IPassword } from '../components/MyPage/ChangePWBox';
import { INickName } from '../components/MyPage/ChangeNameBox';

const serendyInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

serendyInstance.defaults.headers.common['authorization'] = localStorage.getItem('SerendyToken');

class SerendyRepository {

    accountCheck(account: string): Promise<AxiosResponse> {
        return serendyInstance.get(`/api/auth/check/${account}`);
    }

    signUp(data: ISignUpData): Promise<AxiosResponse> {
        return serendyInstance.post('/api/auth/signup', data);
    }

    signIn(data: ISignInData): Promise<AxiosResponse> {
        return serendyInstance.post('/api/auth/signin', data);
    }

    signInWidthToken() {
        return serendyInstance.post('/api/auth/refresh');
    }

    changePassword(data: IPassword) {
        return serendyInstance.post('api/auth/changepw', data);
    }

    changeName(nickName: INickName) {
        return serendyInstance.post('api/auth/changename', nickName);
    }
}

const serendyRepository = new SerendyRepository();

export default serendyRepository;