import { action, computed, makeObservable, observable } from "mobx";

interface IUser {
    nickName: string;
}

interface IAuthStore {
    isSignIn: boolean;
    user: IUser | null;
}

class AuthStore implements IAuthStore {

    private _isSignIn: boolean = false;
    private _user: IUser | null = null;

    constructor() {
        makeObservable<AuthStore, '_isSignIn' | '_user'>(this, {
            _isSignIn: observable,
            _user: observable,
            isSignIn: computed,
            user: computed,
            setIsSignIn: action.bound,
            setUser: action,
            signOut: action.bound,
        })
    }

    get isSignIn(): boolean {
        return this._isSignIn;
    }

    get user(): IUser | null {
        return this._user;
    }

    setIsSignIn(): void {
        this._isSignIn = true;
    }

    setUser(user: IUser): void {
        this._user = user;
    }

    signOut(): void {
        this._isSignIn = false;
    }
}

const authStore = new AuthStore();
export default authStore;