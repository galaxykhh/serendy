import { serendyInstance } from './serendyInstance';
import { AxiosResponse } from 'axios';
import { ISignUpData, ISignInData, IPassword, INickName, IFindPW } from '../interfaces'

class AuthRepository {
    private path = '/api/auth';

    public checkAccount(account: string): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/check/${account}`);
    };

    public signUp(data: ISignUpData): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/signup`, data);
    };

    public signIn(data: ISignInData): Promise<AxiosResponse> {
        console.log(data);
        return serendyInstance.post(`${this.path}/signin`, data);
    };

    public signInWidthToken(): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/refresh`);
    };

    public changePassword(data: IPassword): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/changepw`, data);
    };

    public changeName(nickname: INickName): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/changename`, nickname);
    };

    public findPW(data: IFindPW): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/findpw`, data);
    };
};

const authRepository = new AuthRepository();

export default authRepository;