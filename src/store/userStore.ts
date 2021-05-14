import { action, computed, makeObservable, observable } from "mobx";
import { ISignInData } from '../components/SignIn/SignInBox';
import serendyRepository from '../repository/serendyRepository';
import { Socket } from 'socket.io-client';

interface IUser {
    nickName: string;
}

interface IUserStore {
    isLogging: boolean;
    isSignIn: boolean;
    user: IUser | null;
    userSocket: Socket | null;
    socketID: string | null;
    othersID: string | null;
}

class UserStore implements IUserStore {

    private _isSignIn: boolean = false;
    private _user: IUser | null = null;
    private _isLogging: boolean = false;
    private _userSocket: Socket | null = null;
    private _socketID: string | null = null;
    private _othersID: string | null = null;

    constructor() {
        makeObservable<UserStore, '_isLogging' | '_isSignIn' | '_user' | '_userSocket' | '_socketID' | '_othersID'>(this, {
            _isLogging: observable,
            _isSignIn: observable,
            _user: observable,
            _userSocket: observable,
            _socketID: observable,
            _othersID: observable,
            isLogging: computed,
            isSignIn: computed,
            user: computed,
            userSocket: computed,
            socketID: computed,
            othersID: computed,
            setIsSignIn: action,
            setUser: action,
            signInWithToken: action,
            signIn: action,
            signOut: action,
            setIsLogging: action,
            setUserSocket: action,
            setSocketID: action.bound,
        })
    }

    public get isSignIn(): boolean {
        return this._isSignIn;
    }

    public get user(): IUser | null {
        return this._user;
    }

    public get isLogging(): boolean {
        return this._isLogging;
    }

    public get userSocket(): Socket | null {
        return this._userSocket;
    }

    public get socketID(): string | null {
        return this._socketID;
    }

    public get othersID(): string | null {
        return this._othersID;
    }

    public setIsSignIn(): void {
        this._isSignIn = true;
    }

    public setUser(user: IUser): void {
        this._user = user;
    }

    public setIsLogging(boolean: boolean): void {
        this._isLogging = boolean;
    }

    public setUserSocket(data: Socket | null): void {
        this._userSocket = data;
    }

    public setSocketID(data: string | null): void {
        this._socketID = data;
    }
    public setOthersID(id: string | null): void {
        this._othersID = id;
    }

    public saveSocketID(): void {
        this.userSocket?.emit('enter');
        this.userSocket?.on('enter', myID => {
            this.setSocketID(myID);
        });
    }

    

    // 유효한 토큰을 가지고 있을 시 로그인을 유지하며 새로운 토큰을 발급받아 저장 (expiresIn 30m)
    // 서버쪽 토큰 유효성검사를 하는 미들웨어에서 토큰이 만료되었거나 없으면 403을 띄우면서 종료되어서
    // App 컴포넌트에서 쓰이는 이 메소드와 아래의 signIn 메소드를 따로 분리해서 만들었음.
    async signInWithToken() {
        this.setIsLogging(true);
        try {
            const token = localStorage.getItem('SerendyToken');
            if (!token) {
                this.setIsLogging(false);
                return;
            } else if (token) {
                const response = await serendyRepository.signInWidthToken();
                if ((response.data.message === 'Invalid Token')) { // 토큰만료 또는 없음
                    this.setIsLogging(false);
                    return;
                } else if ((response.data.message === 'SignIn Success')) {
                    this.setUser(response.data.nickName);
                    this.setIsSignIn();
                    localStorage.setItem('SerendyToken', response.data.token);
                    this.setIsLogging(false);
                }
            }
        } catch(err) {
            this.setIsLogging(false);
            alert('서버 점검중입니다')
        }
    }

    async signIn(userData: ISignInData, setError: () => void, push: () => void): Promise<void> {
        this.setIsLogging(true);
        try {
            const response = await serendyRepository.signIn(userData);
            if ((response.data.message === 'SignIn Fail')) {
                this.setIsLogging(false);
                setError();
            } else if ((response.data.message === 'SignIn Success')) {
                this.setUser(response.data.nickName);
                this.setIsSignIn();
                localStorage.setItem('SerendyToken', response.data.token);
                this.setIsLogging(false);
                push();
            }
        } catch(err) {
            this.setIsLogging(false);
            alert('서버 점검중입니다');
        }
    }

    signOut(push: () => void): void {
        this._isSignIn = false;
        this._user = null;
        localStorage.removeItem('SerendyToken');
        push();
    }
}

const userStore = new UserStore();
export default userStore;