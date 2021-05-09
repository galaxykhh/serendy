import { action, computed, makeObservable, observable } from "mobx";
import serendyRepository from "../repository/serendyRepository";

interface IAccount {
    account: string;
    password: string;
}

class AuthStore implements IAccount {

    private _account: string = '';
    private _password: string = '';

    constructor() {
        makeObservable<AuthStore, '_account' | '_password'>(this, {
            _account: observable,
            _password: observable,
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

    setAccount(account: string) {
        this._account = account;
    };

    setPassword(password: string) {
        this._password = password;
    };
}

const authStore = new AuthStore();
export default authStore;