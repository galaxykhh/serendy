import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostBox from '../components/SenderPage/PostBox';
import CenterView from '../components/publicComponents/CenterView';
import Container from '../components/publicComponents/Container';
import Loader from 'react-loader-spinner';
import { theme } from '../style/theme';
import View from '../components/SenderPage/View';
import postStore from '../store/postStore';
import { observer } from 'mobx-react';

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
                    <LoaderBox>
                        <Loader type="Circles"
                            color={theme.colors.plum}
                            height={60}
                            width={60}
                        />
                    </LoaderBox> :
                    <Row>
                        <PostBox sentPosts={postStore.sentPosts}
                            showPost={postStore.handleSentOne}
                        />
                        <View currentSentPost={postStore.currentSentPost} />
                    </Row>
                }
            </CenterView>
        </Container>
    );
});

export default SenderPage;

const Row = styled.div`
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LoaderBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;