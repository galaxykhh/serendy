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
                    post.receivedPosts.map((x: any) => (
                        x.map((x: any, i: number) => (
                            <Post nickName={x.nickName}
                                  content={x.content}
                                  key={i}
                                  onClick={() => console.log('dd')}
                                  />
                        ))
                    )) :
                    <>
                    ddd
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
    min-height: 95%;
    max-height: 740px;
    border-radius: 10px;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.white20};
`;