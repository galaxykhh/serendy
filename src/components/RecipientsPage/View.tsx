import React from 'react';
import { IView } from '../../interfaces/index';
import HaveComment from '../PublicComponents/HaveComment';
import NoneComment from '../PublicComponents/NoneComment';

const View: React.FC<IView>= ({ post, commentInput, sendComment }) => {
        if (post && post.comment) {
            return <HaveComment post={post} />
        };
        if (post && !post.comment) {
            return <NoneComment post={post}
                        commentInput={commentInput}
                        sendComment={sendComment}
                        whatPage='recipients'
                    />
        };
    return null;
};

export default View;
