import { action, computed, flow, makeObservable, observable, runInAction } from "mobx";
import authRepository from '../repository/authRepository';
import { ISignInData, IPassword, INickName, IFindPW, IUserStore, IUser, ISignUpData } from '../interfaces';
import { Socket } from 'socket.io-client';

class UserStore implements IUserStore {
    private _user: IUser | null = null;
    private _userSocket: Socket | null = null;
    private _socketID: string | null = null;
    public isLogging: boolean = false;

    constructor() {
        makeObservable<UserStore, '_user' | '_userSocket' | '_socketID'>(this, {
            _user: observable,
            _userSocket: observable,
            _socketID: observable,
            isLogging: observable,
            user: computed,
            userSocket: computed,
            socketID: computed,
            setUser: action,
            signInWithToken: flow,
            signIn: flow,
            signUp: flow,
            checkAccount: flow,
            changePW: flow,
            changeName: flow,
            findPW: flow,
            signOut: action.bound,
            setIsLogging: action,
            setUserSocket: action,
            setSocketID: action,
            saveSocketID: action,
        });
    };

    public get user(): IUser | null {
        return this._user;
    };

    public get userSocket(): Socket | null {
        return this._userSocket;
    };

    public get socketID(): string | null {
        return this._socketID;
    };

    public setUser(user: IUser | null): void {
        this._user = user;
    };

    public setIsLogging(boolean: boolean): void {
        this.isLogging = boolean;
    };

    public setUserSocket(data: Socket | null): void {
        this._userSocket = data;
    };

    public setSocketID(myID: string | null): void {
        this._socketID = myID;
    };

    public saveSocketID(): void {
        this.userSocket?.emit('enter');
        this.userSocket?.on('entered', myID => {
            this.setSocketID(myID);
        });
    };

    public *signInWithToken() {
        try {
            const token = localStorage.getItem('SerendyToken');
            if (token) {
                this.setIsLogging(true);
                const { data: { message, account, nickname, token } } = yield authRepository.signInWidthToken();
                    if (message === 'signin success') {
                        this.setUser({ account , nickname });
                        localStorage.setItem('SerendyToken', token);
                        this.setIsLogging(false);
                        return true;
                    };
            };
            this.setIsLogging(false);
            return false;
        } catch(err) {
            alert('?????? ??????????????????');
        };
    };

    public *signIn(userData: ISignInData) {
        this.setIsLogging(true);
        try {
            const { data: { message, account, nickname, token } } = yield authRepository.signIn(userData);
            if (message === 'signin success') {
                this.setUser({ account, nickname });
                localStorage.setItem('SerendyToken', token);
                return true;
            };
            return false;
        } catch(err) {
            console.log(err);
            alert('?????? ??????????????????');
        } finally {
            this.setIsLogging(false);
        };
    };

    public *signUp(userData: ISignUpData) {
        try {
            const { data: { message } } = yield authRepository.signUp(userData);
            if (message === 'signup success') {
                return true;
            };
            return false;
        } catch(err) {
            console.log(err);
            alert('?????? ??????????????????');
        };
    };

    public *checkAccount(account: string) {
        try {
            const { data: { message } } = yield authRepository.checkAccount(account);
            if (message === 'available') {
                return true;
            };
            return false; // message = 'already exist'
        } catch(err) {
            console.log(err);
            alert('?????? ??????????????????');
        };
    };
    
    public *changePW(data: IPassword) {
        try {
            const { data: { message }} = yield authRepository.changePassword(data);
            if (message === 'changed') {
                alert(`??????????????? ?????????????????????\n?????? ????????? ????????????`);
                return this.signOut();
            };
        } catch(err) {
            alert('????????? ??????????????????');
        };
    };
    
    public *changeName(nickname: INickName) {
        try {
            const { data: { message }} = yield authRepository.changeName(nickname);
            if (message === 'changed') {
                alert(`???????????? ?????????????????????\n?????? ????????? ????????????`)
                return this.signOut();
            };
        } catch(err) {
            alert('????????? ??????????????????');
        };
    };
    
    public *findPW(data: IFindPW) {
        try {
            const { data: { message }} = yield authRepository.findPW(data);
            if (message === 'not exist') {
                alert('???????????? ????????? ????????????');
                return false;
            }
            if (message === 'valid user') {
                alert(`????????? ?????? ????????????\n??????????????? ?????????????????????\n???????????? ????????? ??? ????????????`);
                return this.signOut();
            };
        } catch (err) {
            alert('????????? ??????????????????');
        };
    };

    public signOut(): boolean {
        this.setUser(null);
        localStorage.removeItem('SerendyToken');
        return true;
    };
};

const userStore = new UserStore();
export default userStore;