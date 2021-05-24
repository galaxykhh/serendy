import { serendyInstance } from './serendyInstance';
import { AxiosResponse } from 'axios';
import { ISendPost, ISendComment } from '../interfaces';

class PostRepository {
    private path='/api/post';

    public sendPost(data: ISendPost): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/send`, data);
    };

    public getSentPosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/sentposts/${account}`);
    };

    public getReceivePosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/receivedposts/${account}`);
    };

    public showClickedOne(_Id: string, account: string): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/showone/${_Id}/${account}`);
    };

    public sendComment(data: ISendComment): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/sendcomment`, data);
    };
};

const postRepository = new PostRepository();

export default postRepository;