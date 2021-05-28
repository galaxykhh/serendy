import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PostBox from '../components/RecipientsPage/PostBox';
import CenterView from '../components/PublicComponents/CenterView';
import Container from '../components/PublicComponents/Container';
import View from '../components/RecipientsPage/View';
import postStore from '../store/postStore';
import { observer } from 'mobx-react';
import CircleLoader from '../components/PublicComponents/CircleLoader';

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
                    <Row>
                        <PostBox receivedPosts={postStore.receivedPosts}
                            showPost={postStore.handleReceivedOne}
                        />                        
                        <View post={postStore.currentReceivedPost}
                            commentInput={commentInput}
                            sendComment={() => postStore.sendComment(commentInput.current?.value)}
                        />
                    </Row>   
                }
            </CenterView>
        </Container>
    );
});

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