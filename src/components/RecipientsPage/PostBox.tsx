import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePost } from '../../Hooks/usePost';
import Post from './Post';
import View from './View';

const PostBox: React.FC = () => {
    const post = usePost();

    useEffect(() => {
        post.getReceivedPosts();
    }, []); //eslint-disable-line

    return (
        <>
            <ListBox>
                {post.receivedPosts !== null && post.receivedPosts.length > 0 ? 
                    post.receivedPosts.map((x, i) => (
                        <Post nickName={x.nickName}
                              content={x.content}
                              key={i}
                              onClick={() => console.log('dd')}
                              />
                    )) :
                    <>
                    </>
                }
            </ListBox>
            <View />
        </>
    )
}

export default PostBox;

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 30%;
    height: 740px;
    min-height: 740px;
    max-height: 740px;
    margin-top: 10px;
    border-radius: 10px;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.white20};
`;