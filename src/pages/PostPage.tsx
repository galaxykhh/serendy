import { observer } from 'mobx-react';
import React from 'react'
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'

const PostPage: React.FC = observer(() => {
    return (
        <Container>
            <CenterView>
                편지 보내는 페이지
            </CenterView>
        </Container>
    );
});

export default PostPage;
