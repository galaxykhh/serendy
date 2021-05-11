import axios, { AxiosResponse } from 'axios';
import { ISignUpData } from '../components/SignUp/SignUpBox';
import { ISignInData } from '../components/SignIn/SignInBox';
import { BASE_URL } from '../config';

const serendyInstance = axios.create({
    baseURL: BASE_URL,
});

class SerendyRepository {

    test() {
        return serendyInstance.get('/api/auth/auth');
    }

    accountCheck(account: string): Promise<AxiosResponse> {
        return serendyInstance.get(`/api/auth/check/${account}`);
    }

    signUp(data: ISignUpData): Promise<AxiosResponse> {
        return serendyInstance.post('/api/auth/signup', data);
    }

    signIn(data: ISignInData): Promise<AxiosResponse> {
        return serendyInstance.post('/api/auth/signin', data);
    }
}

const serendyRepository = new SerendyRepository();

export default serendyRepository;