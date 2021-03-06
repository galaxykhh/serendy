import React from 'react';
import { IView } from '../../interfaces/index';
import HaveComment from '../SharedComponents/PostComponents/HaveComment';
import NoneComment from '../SharedComponents/PostComponents/NoneComment';

const SentPostViewer: React.FC<IView>= ({ post }) => {
    if (post && post.comment) {
        return (
            <HaveComment post={post} />
        );
    };
    if (post && !post.comment) {
        return (
        <NoneComment
            post={post}
            whatPage='sender'    
        />
        );
    };
    return null;
};

export default SentPostViewer;

