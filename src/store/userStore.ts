import { action, computed, flow, makeObservable, observable } from "mobx";
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

    // 유효한 토큰을 가지고 있을 시 로그인을 유지하며 새로운 토큰을 발급받아 저장 (expiresIn 30m)
    // 서버쪽 토큰 유효성검사를 하는 미들웨어에서 토큰이 만료되었거나 없으면 403을 띄우면서 종료되어서
    // App 컴포넌트에서 쓰이는 이 메소드와 아래의 signIn 메소드를 따로 분리해서 만들었음.
    public *signInWithToken() {
        this.setIsLogging(true);
        try {
            const token = localStorage.getItem('SerendyToken');
            if (token) {
                const { data: {message, account, nickName, token}} = yield authRepository.signInWidthToken();
                    if (message === 'SignIn Success') {
                        this.setUser({ account , nickName });
                        localStorage.setItem('SerendyToken', token);
                        this.setIsLogging(false);
                        return true;
                    };
            };
            this.setIsLogging(false);
            return false;
        } catch(err) {
            this.setIsLogging(false);
            alert('서버 점검중입니다');
        };
    };

    public *signIn(userData: ISignInData) {
        this.setIsLogging(true);
        try {
            const { data: { message, account, nickName, token } } = yield authRepository.signIn(userData);
            if (message === 'SignIn Success') {
                this.setUser({ account, nickName });
                localStorage.setItem('SerendyToken', token);
                this.setIsLogging(false);
                return true;
            };
            this.setIsLogging(false);
            return false;
        } catch(err) {
            console.log(err);
            this.setIsLogging(false);
            alert('서버 점검중입니다');
        };
    };

    public *signUp(userData: ISignUpData) {
        try {
            const { data: { message } } = yield authRepository.signUp(userData);
            if (message === 'SignUp Success') {
                return true;
            };
            return false;
        } catch(err) {
            console.log(err);
            alert('서버 점검중입니다');
        };
    };

    public *checkAccount(account: string) {
        try {
            const { data: { message } } = yield authRepository.checkAccount(account);
            if (message === 'available') {
                return true;
            } else { // message = 'already exist'
                return false;
            };
        } catch(err) {
            console.log(err);
            alert('서버 점검중입니다');
        };
    };
    
    public *changePW(data: IPassword) {
        try {
            const { data: { message }} = yield authRepository.changePassword(data);
            if (message === 'Changed') {
                alert(`비밀번호가 변경되었습니다\n다시 로그인 해주세요`);
                this.signOut();
            };
        } catch(err) {
            alert('서버가 점검중이에요');
        };
    };
    
    public *changeName(nickName: INickName) {
        try {
            const { data: { message }} = yield authRepository.changeName(nickName);
            if (message === 'Changed') {
                alert(`닉네임이 변경되었습니다\n다시 로그인 해주세요`)
                this.signOut();
            };
        } catch(err) {
            alert('서버가 점검중이에요');
        };
    };
    
    public *findPW(data: IFindPW) {
        try {
            const { data: { message }} = yield authRepository.findPW(data);
            if (message === 'Not Exist') {
                alert('일치하는 정보가 없습니다');
                return;
            }
            if (message === 'Valid User') {
                alert(`임시로 암호 메세지가\n비밀번호로 설정되었습니다\n비밀번호 변경을 꼭 해주세요`);
                return this.signOut();
            };
        } catch (err) {
            alert('서버가 점검중이에요');
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