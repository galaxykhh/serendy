import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostBox from '../components/SenderPage/PostBox';
import CenterView from '../components/publicComponents/CenterView';
import Container from '../components/publicComponents/Container';
import { usePost } from '../Hooks/usePost';
import Loader from 'react-loader-spinner';
import { theme } from '../style/theme';
import View from '../components/SenderPage/View';

const SenderPage: React.FC = () => {
    const post = usePost();

    useEffect(() => {
        post.getSentPosts();
    }, []); //eslint-disable-line
    return (
        <Container>
            <CenterView>
                    <Row>
                        {!post.isLoading ? 
                            <>
                                <PostBox sentPosts={post.sentPosts}
                                         onClick={post.handleSentOne}
                                         />
                                <View currentSentPost={post.currentSentPost}
                                      />
                            </> :
                            <LoaderBox>
                                <Loader type="Circles"
                                        color={theme.colors.plum}
                                        height={60}
                                        width={60}
                                        />
                            </LoaderBox>
                        }
                    </Row>
            </CenterView>
        </Container>
    );
};

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