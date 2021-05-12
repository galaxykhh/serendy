import { observer } from 'mobx-react';
import React from 'react'
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'
import PostWindow from '../components/PostPage/PostWindow';

const PostPage: React.FC = observer(() => {
    return (
        <Container>
            <CenterView>
                <PostWindow />
            </CenterView>
        </Container>
    );
});

export default PostPage;
