import React from 'react';
import { IView } from '../../interfaces/index';
import HaveComment from '../PublicComponents/HaveComment';
import NoneComment from '../PublicComponents/NoneComment';

const View: React.FC<IView>= ({ post }) => {
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

export default View;

