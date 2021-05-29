import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import CenterView from '../components/SharedComponents/CenterView';
import Container from '../components/SharedComponents/Container';
import ReceivedPostViewer from '../components/RecipientsPage/ReceivedPostViewer';
import postStore from '../store/postStore';
import { observer } from 'mobx-react';
import CircleLoader from '../components/SharedComponents/CircleLoader';
import PostBox from '../components/SharedComponents/PostComponents/PostList';

const RecipientsPage: React.FC = observer(() => {
    const commentInput = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        postStore.getReceivedPosts(); 
    }, []); //eslint-disable-line

    useEffect(() => {
        return () => {
            postStore.resetReceivedPosts();
        }
    }, []); //eslint-disable-line

    return (
        <Container>
            <CenterView>
                {postStore.isLoading ?
                    <CircleLoader /> :
                    <Box>
                        <PostBox posts={postStore.receivedPosts}
                            showPost={postStore.handleReceivedOne}
                            whatPage='recipients'
                        />                        
                        <ReceivedPostViewer post={postStore.currentReceivedPost}
                            commentInput={commentInput}
                            sendComment={() => postStore.sendComment(commentInput.current?.value)}
                        />
                    </Box>   
                }
            </CenterView>
        </Container>
    );
});

export default RecipientsPage;

const Box = styled.div`
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;