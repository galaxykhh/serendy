import React, { useEffect } from 'react';
import styled from 'styled-components';
import CenterView from '../components/SharedComponents/CenterView';
import Container from '../components/SharedComponents/Container';
import SentPostViewer from '../components/SenderPage/SentPostViewer';
import postStore from '../store/postStore';
import { observer } from 'mobx-react';
import CircleLoader from '../components/SharedComponents/CircleLoader';
import PostBox from '../components/SharedComponents/PostComponents/PostList';

const SenderPage: React.FC = observer(() => {

    useEffect(() => {
        postStore.getSentPosts();
    }, []); //eslint-disable-line

    useEffect(() => {
        return () => {
            postStore.resetSentPosts();
        }
    }, []); //eslint-disable-line

    return (
        <Container>
            <CenterView>
                {postStore.isLoading ?
                    <CircleLoader /> :
                    <Box>
                        <PostBox posts={postStore.sentPosts}
                            showPost={postStore.handleSentOne}
                            whatPage='sender'
                        />
                        <SentPostViewer post={postStore.currentSentPost} />
                    </Box>
                }
            </CenterView>
        </Container>
    );
});

export default SenderPage;

const Box = styled.div`
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;