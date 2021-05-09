import { action, computed, makeObservable, observable } from "mobx";
import serendyRepository from "../repository/serendyRepository";

interface IAccount {
    account: string;
    password: string;
}

interface IUser extends IAccount {
    name: string;
}

class AuthStore implements IAccount {

    private _account: string = '';
    private _password: string = '';
    isLogged: boolean = false;
    user: IUser | null = null;

    constructor() {
        makeObservable<AuthStore, '_account' | '_password'>(this, {
            _account: observable,
            _password: observable,
            user: observable,
            account: computed,
            password: computed,
            setAccount: action,
            setPassword: action,
        })
    }
    get account(): string {
        return this._account;
    };

    get password(): string {
        return this._password;
    };

    setAccount(account: string): void {
        this._account = account;
    };

    setPassword(password: string): void {
        this._password = password;
    };
}

const authStore = new AuthStore();
export default authStore;