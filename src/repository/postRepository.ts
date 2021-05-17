import { serendyInstance } from './serendyInstance';
import { AxiosResponse } from 'axios';
import { IPost } from '../Hooks/usePost';


class PostRepository {

    private path='/api/post'

    sendPost(data: IPost): Promise<AxiosResponse> {
        return serendyInstance.post(`${this.path}/send`, data);
    }

    getSentPosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/sentposts/${account}`);
    };

    getReceivePosts(account: string | null | undefined): Promise<AxiosResponse> {
        return serendyInstance.get(`${this.path}/receiveposts/${account}`);
    };
};

const postRepository = new PostRepository();

export default postRepository;