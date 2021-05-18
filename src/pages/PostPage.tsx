import { observer } from 'mobx-react';
import React from 'react'
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'
import PostWindow from '../components/PostPage/PostWindow';
import PostSent from '../components/PostPage/PostSent';
import { usePost } from '../Hooks/usePost';

const PostPage: React.FC = observer(() => {

    const post = usePost();

    return (
        <Container>
            <CenterView>
                {post.isSent ? <PostSent onClick={() => post.setIsSent(false)}  /> : 
                               <PostWindow postSend={post.handlePost}
                                           textArea={post.textArea}
                                           />
                }
            </CenterView>
        </Container>
    );
});

export default PostPage;
