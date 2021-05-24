import { action, makeObservable, observable, runInAction } from 'mobx';
import { ICurrentPost } from '../interfaces/index';
import userStore from './userStore';
import postRespository from '../repository/postRepository'

class PostStore {
    public sentPosts: ICurrentPost[] = [];
    public receivedPosts: ICurrentPost[] = [];
    public currentSentPost: ICurrentPost | null = null
    public currentReceivedPost: ICurrentPost | null = null;
    public isLoading: boolean = false;

    constructor() {
        makeObservable(this, {
            sentPosts: observable,
            receivedPosts: observable,
            currentSentPost: observable,
            currentReceivedPost: observable,
            isLoading: observable,
            setSentPosts: action,
            setReceivedPosts: action,
            setCurrentSentPost: action,
            setCurrentReceivedPost: action,
            setIsLoading: action,
            handlePost: action,
            getSentPosts: action,
            getReceivedPosts: action,
            handleSentOne: action.bound,
            handleReceivedOne: action.bound,
            sendComment: action,
            resetReceivedPosts: action,
            resetSentPosts: action,
        });
    };

    public setSentPosts(data: ICurrentPost[]): void {
        this.sentPosts = data;
    };

    public setReceivedPosts(data: ICurrentPost[]): void {
        this.receivedPosts = data;
    };

    public setCurrentSentPost(data: ICurrentPost): void {
        this.currentSentPost = data;
    };

    public setCurrentReceivedPost(data: ICurrentPost): void {
        this.currentReceivedPost = data;
    };

    public setIsLoading(boolean: boolean): void {
        this.isLoading = boolean;
    };

    public async handlePost(content: string | undefined, setIsSent: () => void): Promise<void> {
        try {
            if (content?.length === 0) {
                return;
            };
            const data = {
                account: userStore.user?.account,
                nickName: userStore.user?.nickName,
                content: content,
            };
            const { data: message } = await postRespository.sendPost(data);
            runInAction(() => {
                if ((message === 'Send Success')) {
                    setIsSent();
                };
            })
        } catch(err) {
            alert('서버가 점검중이에요');
        };
    };

    public async getSentPosts(): Promise<void> {
        this.setIsLoading(true);
        try {
            const { data } = await postRespository.getSentPosts(userStore.user?.account);
            runInAction(() => {
                this.setSentPosts(data);
                this.setIsLoading(false);
            });
        } catch(err) {
            console.log(err);
            alert('오류가 발생하였습니다');
            return;
        };
    };

    public async getReceivedPosts(): Promise<void> {
        this.setIsLoading(true);
        try {
            const { data } = await postRespository.getReceivePosts(userStore.user?.account);
            runInAction(() => {
                this.setReceivedPosts(data);
                console.log(data);
                this.setIsLoading(false);
            });
        } catch(err) {
            console.log(err);
            alert('오류가 발생하였습니다');
            return;
        };
    };

    public handleSentOne(_id: string): void {
        const post = this.sentPosts.find(x => x._id === _id);
        post && this.setCurrentSentPost(post);
    };

    public handleReceivedOne(_id: string): void {
        const post = this.receivedPosts.find(x => x._id === _id);
        post && this.setCurrentReceivedPost(post);
    };

    public async sendComment(content: string | undefined): Promise<void> {
        try {
            if (content?.length === 0) {
                return;
            };
            const data = {
                _id: this.currentReceivedPost?._id,
                toAccount: this.currentReceivedPost?.toAccount,
                nickName: userStore.user?.nickName,
                content: content,
            };
            const { data: { message, receivedPosts, currentReceivedPost}} = await postRespository.sendComment(data);
            if ((message === 'Success')) {
                this.setReceivedPosts(receivedPosts);
                this.setCurrentReceivedPost(currentReceivedPost);
            };
        } catch(err) {
            console.log(err);
            alert('서버 점검중입니다');
        };
    };

    public resetReceivedPosts(): void {
        this.setReceivedPosts([]);
    };

    public resetSentPosts(): void {
        this.setSentPosts([]);
    };
};

const postStore = new PostStore();
export default postStore;