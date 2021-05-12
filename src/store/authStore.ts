import { action, computed, makeObservable, observable } from "mobx";
import { ISignInData } from '../components/SignIn/SignInBox';
import serendyRepository from '../repository/serendyRepository';

interface IUser {
    nickName: string;
}

interface IAuthStore {
    isLogging: boolean;
    isSignIn: boolean;
    user: IUser | null;
}

class AuthStore implements IAuthStore {

    private _isSignIn: boolean = false;
    private _user: IUser | null = null;
    private _isLogging: boolean = false;

    constructor() {
        makeObservable<AuthStore, '_isLogging' | '_isSignIn' | '_user'>(this, {
            _isLogging: observable,
            _isSignIn: observable,
            _user: observable,
            isLogging: computed,
            isSignIn: computed,
            user: computed,
            setIsSignIn: action.bound,
            setUser: action,
            signInWithToken: action.bound,
            signIn: action.bound,
            signOut: action.bound,
            setIsLogging: action.bound,
        })
    }

    get isSignIn(): boolean {
        return this._isSignIn;
    }

    get user(): IUser | null {
        return this._user;
    }

    get isLogging(): boolean {
        return this._isLogging;
    }

    setIsSignIn(): void {
        this._isSignIn = true;
    }

    setUser(user: IUser): void {
        this._user = user;
    }

    setIsLogging(boolean: boolean): void {
        this._isLogging = boolean;
    }

    async signInWithToken() {
        this.setIsLogging(true);
        try {
            const token = localStorage.getItem('SerendyToken');
            if (!token) {
                this.setIsLogging(false);
                return;
            } else if (token) {
                const response = await serendyRepository.signInWidthToken();
                if ((response.data.message === 'Invalid Token')) {
                    return;
                } else if ((response.data.message === 'SignIn Success')) {
                    this.setUser(response.data.nickName);
                    this.setIsSignIn();
                    this.setIsLogging(false);
                }
            }
        } catch(err) {
            this.setIsLogging(false);
            alert('현재 서버를 점검중입니다')
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
            alert('현재 서버를 점검중입니다');
        }
    }

    signOut(push: () => void): void {
        this._isSignIn = false;
        this._user = null;
        localStorage.removeItem('SerendyToken');
        push();
    }
}

const authStore = new AuthStore();
export default authStore;