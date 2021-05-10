import { action, computed, makeObservable, observable } from "mobx";
import serendyRepository from "../repository/serendyRepository";

interface IUser {
    nickName: string;
}

interface IAuthStore {
    isLogged: boolean;
    user: IUser | null;
}

class AuthStore implements IAuthStore {

    private _isLogged: boolean = false;
    private _user: IUser | null = null;

    constructor() {
        makeObservable<AuthStore, '_isLogged' | '_user'>(this, {
            _isLogged: observable,
            _user: observable,
            isLogged: computed,
            user: computed,
            setIsLogged: action,
            setUser: action,
        })
    }

    get isLogged(): boolean {
        return this._isLogged;
    }

    get user(): IUser | null {
        return this._user;
    }

    setIsLogged(status: boolean): void {
        this._isLogged = status;
    }

    setUser(user: IUser): void {
        this._user = user;
    }
}

const authStore = new AuthStore();
export default authStore;