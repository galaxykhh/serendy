import { action, computed, makeObservable, observable } from "mobx";
import { ISignInData } from '../components/SignIn/SignInBox';
import { IPassword } from '../components/MyPage/ChangePWBox';
import serendyRepository from '../repository/serendyRepository';
import { Socket } from 'socket.io-client';
import { INickName } from '../components/MyPage/ChangeNameBox';
import { IFindPW } from '../components/FindPW/FindPWBox';
interface IUser {
    account: string | null;
    nickName: string | null;
}

interface IUserStore {
    isLogging: boolean;
    isSignIn: boolean;
    user: IUser | null;
    userSocket: Socket | null;
    socketID: string | null;
}

class UserStore implements IUserStore {

    private _isSignIn: boolean = false;
    private _user: IUser | null = null;
    private _isLogging: boolean = false;
    private _userSocket: Socket | null = null;
    private _socketID: string | null = null;

    constructor() {
        makeObservable<UserStore, '_isLogging' | '_isSignIn' | '_user' | '_userSocket' | '_socketID'>(this, {
            _isLogging: observable,
            _isSignIn: observable,
            _user: observable,
            _userSocket: observable,
            _socketID: observable,
            isLogging: computed,
            isSignIn: computed,
            user: computed,
            userSocket: computed,
            socketID: computed,
            setIsSignIn: action,
            setUser: action,
            signInWithToken: action,
            signIn: action,
            signOut: action,
            changePW: action,
            setIsLogging: action,
            setUserSocket: action,
            setSocketID: action,
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

    public setIsSignIn(status: boolean): void {
        this._isSignIn = status;
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

    public setSocketID(myID: string | null): void {
        this._socketID = myID;
    }

    public saveSocketID(): void {
        this.userSocket?.emit('enter');
        this.userSocket?.on('entered', myID => {
            this.setSocketID(myID);
        });
    }
    // 유효한 토큰을 가지고 있을 시 로그인을 유지하며 새로운 토큰을 발급받아 저장 (expiresIn 30m)
    // 서버쪽 토큰 유효성검사를 하는 미들웨어에서 토큰이 만료되었거나 없으면 403을 띄우면서 종료되어서
    // App 컴포넌트에서 쓰이는 이 메소드와 아래의 signIn 메소드를 따로 분리해서 만들었음.
    async signInWithToken(push: () => void) {
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
                    this.setUser({
                        account: response.data.account,
                        nickName: response.data.nickName,
                    });
                    this.setIsSignIn(true);
                    localStorage.setItem('SerendyToken', response.data.token);
                    this.setIsLogging(false);
                    push();
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
                this.setUser({
                    account: response.data.account,
                    nickName: response.data.nickName,
                });
                this.setIsSignIn(true);
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
        this.setIsSignIn(false);
        this.setUser({ account: null, nickName: null });
        localStorage.removeItem('SerendyToken');
        push();
    }

    async changePW(data: IPassword, push: () => void): Promise<void> {
        try {
            const response = await serendyRepository.changePassword(data);
            if ((response.data.message === 'Changed')) {
                alert(`비밀번호가 변경되었습니다\n다시 로그인 해주세요`);
                this.signOut(push);
            }
        } catch(err) {
            alert('서버가 점검중이에요');
        };
    };

    async changeName(nickName: INickName, push: () => void): Promise<void> {
        try {
            const response = await serendyRepository.changeName(nickName);
            if ((response.data.message === 'Changed')) {
                alert(`닉네임이 변경되었습니다\n다시 로그인 해주세요`)
                this.signOut(push);
            }
        } catch(err) {
            alert('서버가 점검중이에요');
        };
    };

    async findPW(data: IFindPW, push: () => void): Promise<void> {
        try {
            const response = await serendyRepository.findPW(data);
            if ((response.data.message === 'Not Exist')) {
                return alert('일치하는 정보가 없습니다');
            } else if ((response.data.message === 'Valid User')) {
                alert(`임시로 암호 메세지가\n비밀번호로 설정되었습니다\n비밀번호 변경을 꼭 해주세요`);
                push();
            };
        } catch (err) {
            alert('서버가 점검중이에요');
        };
    };
};

const userStore = new UserStore();
export default userStore;