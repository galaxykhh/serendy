import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostBox from '../components/RecipientsPage/PostBox';
import CenterView from '../components/publicComponents/CenterView';
import Container from '../components/publicComponents/Container';
import { usePost } from '../Hooks/usePost';
import { theme } from '../style/theme';
import Loader from 'react-loader-spinner';
import View from '../components/RecipientsPage/View';


const RecipientsPage: React.FC = () => {
    const post = usePost();

    useEffect(() => {
        post.getReceivedPosts(); 
    }, []); //eslint-disable-line
    return (
        <Container>
            <CenterView>
                    <Row>
                        {!post.isLoading ?
                            <>
                                <PostBox receivedPosts={post.receivedPosts}
                                        onClick={post.handleReceivedOne}
                                        />                        
                                <View currentReceivedPost={post.currentReceivedPost}
                                    commentArea={post.commentArea}
                                    sendComment={post.sendComment}
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

const LoaderBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;