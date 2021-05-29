import React from 'react';
import { IView } from '../../interfaces/index';
import HaveComment from '../SharedComponents/PostComponents/HaveComment';
import NoneComment from '../SharedComponents/PostComponents/NoneComment';

const ReceivedPostViewer: React.FC<IView>= ({ post, commentInput, sendComment }) => {
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

export default ReceivedPostViewer;
