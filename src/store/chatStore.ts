import { action, makeObservable, observable, runInAction } from "mobx";
import { VisibilityType, IRecentChat } from '../interfaces/index';
import userStore from "./userStore";

class ChatStore {
    public isSearching: boolean = false;
    public isMatched: boolean = false;
    public isFinished: boolean = false;
    public visible: VisibilityType = 'hidden';
    public chatLog: IRecentChat[] = [];
    public recentChat: IRecentChat = { nickName: '', message: '', socketID: '' };

    constructor() {
        makeObservable(this, {
            isSearching: observable,
            isMatched: observable,
            isFinished: observable,
            visible: observable,
            chatLog: observable,
            recentChat: observable,
            setIsSearching: action,
            setIsMatched: action,
            setIsFinished: action,
            resetRecentChat: action,
            handleCancel: action,
            handleFind: action,
            handleSearch: action.bound,
            handleMatched: action,
            handleReceiveMsg: action,
            handlePushChat: action,
            handleFinished: action,
            stopChat: action.bound,
            chatStopped: action,
            reset: action.bound,
        });
    };

    public setIsSearching(boolean: boolean): void {
        this.isSearching = boolean;
    };

    public setIsMatched(boolean: boolean): void {
        this.isMatched = boolean;
    };

    public setIsFinished(boolean: boolean): void {
        this.isFinished = boolean;
    };

    public setVisible(status: VisibilityType): void {
        this.visible = status;
    }

    public resetRecentChat(): void {
        this.recentChat = { nickName: '', message: '', socketID: '' };
    };

    public handleCancel(): void {
        userStore.userSocket?.emit('cancel');
    };

    public handleFind(): void {
        userStore.userSocket?.emit('find');
    };

    public handleSearch(): void {
        if (!this.isSearching) {
            this.setIsSearching(true);
            this.handleFind();
        } else {
            this.setIsSearching(false);
            this.handleCancel();
        };
    };

    public handleMatched(): void {
        userStore.userSocket?.on('matched', () => {
            runInAction(() => {
                this.setIsMatched(true);
                this.setVisible('visible');
                this.chatLog = [{
                nickName: 'SERENDY',
                message: '상대와 대화가 시작되었어요!',
                socketID: 'admin',
                }];
            })
        });
    };

    public handleReceiveMsg(): void {
        userStore.userSocket?.on('receive', (data, socketID) => {
            runInAction(() => {
                this.recentChat = {
                    nickName: data.nickName,
                    message: data.message,
                    socketID: socketID
                };
            });
        });
    };

    public handlePushChat(): void {
        if (this.recentChat.message.length > 0) {
            this.chatLog = [...this.chatLog, this.recentChat];
        };
    };

    public handleFinished(): void {
        if (this.isSearching && this.isMatched && !this.isFinished) {
            this.setIsFinished(true);
            this.recentChat = {
                nickName: 'SERENDY',
                message: '대화가 종료되었어요!',
                socketID: 'admin',
            };
        } else {
            return;
        };
    };

    public stopChat(): void {
        userStore.userSocket?.emit('stop chat');
        this.handleFinished();
    };

    public chatStopped(): void {
        userStore.userSocket?.on('is ended', () => {
            userStore.userSocket?.emit('delete other');
            this.handleFinished();
        });
    };

    public reset(): void {
        this.chatLog = [];
        this.setIsSearching(false);
        this.setIsFinished(false);
        this.setIsMatched(false);
    };
};

const chatStore = new ChatStore();
export default chatStore;