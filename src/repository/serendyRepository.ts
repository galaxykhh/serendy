import axios, { AxiosResponse } from 'axios';
import { ISignUpData } from '../components/SignUp/SignUpBox';
import { ISignInData } from '../components/SignIn/SignInBox';
import { BASE_URL } from '../config'; // eslint-disable-line

const serendyInstance = axios.create({
    baseURL: BASE_URL,
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
}

const serendyRepository = new SerendyRepository();

export default serendyRepository;