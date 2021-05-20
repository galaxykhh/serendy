import { serendyInstance } from './serendyInstance';
import { AxiosResponse } from 'axios';
import { ISignUpData, ISignInData, IPassword, INickName, IFindPW } from '../interfaces'

class AuthRepository {

    private path='/api/auth';

    accountCheck(account: string): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/check/${account}`);
    };

    signUp(data: ISignUpData): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/signup`, data);
    };

    signIn(data: ISignInData): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/signin`, data);
    };

    signInWidthToken(): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/refresh`);
    };

    changePassword(data: IPassword): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/changepw`, data);
    };

    changeName(nickName: INickName): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/changename`, nickName);
    };

    findPW(data: IFindPW): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/findpw`, data);
    };
};

const authRepository = new AuthRepository();

export default authRepository;