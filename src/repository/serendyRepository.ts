import axios, { AxiosResponse } from 'axios';
import { ISignUpData } from '../components/SignUp/SignUpBox';
import { ISignInData } from '../components/SignIn/SignInBox';

const serendyInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

class SerendyRepository {

    checkDuplicate(account: string): Promise<AxiosResponse> {
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