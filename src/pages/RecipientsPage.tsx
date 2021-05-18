import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostBox from '../components/RecipientsPage/PostBox';
import CenterView from '../components/publicComponents/CenterView';
import Container from '../components/publicComponents/Container';
import { usePost } from '../Hooks/usePost';

const RecipientsPage: React.FC = () => {

    const post = usePost();

    useEffect(() => {
        post.getReceivedPosts();
    }, []);

    return (
        <Container>
            <CenterView>
                    <Row>
                        <PostBox receivedPosts={post.receivedPosts}
                                 currentPost={post.currentPost!}
                                 onClick={post.showReceivedOne}
                                 content={post.currentPost?.content}
                                 nickName={post.currentPost?.nickName}
                                 comment={post.currentPost?.comment}
                                 />
                    </Row>
            </CenterView>
        </Container>
    )
}

export default RecipientsPage;

const Row = styled.div`
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;