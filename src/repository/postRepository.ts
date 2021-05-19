import { serendyInstance } from './serendyInstance';
import { AxiosResponse } from 'axios';
import { ISendPost, ISendComment } from '../Hooks/usePost';


class PostRepository {

    private path='/api/post'

    sendPost(data: ISendPost): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/send`, data);
    }

    getSentPosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/sentposts/${account}`);
    };

    getReceivePosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/receivedposts/${account}`);
    };

    showClickedOne(_Id: string, account: string): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/showone/${_Id}/${account}`);
    };

    sendComment(data: ISendComment): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/sendcomment`, data);
    };
};

const postRepository = new PostRepository();

export default postRepository;