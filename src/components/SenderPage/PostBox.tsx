import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePost } from '../../Hooks/usePost';
import Post from './Post';
import View from './View';

const PostBox: React.FC = () => {
    const post = usePost();

    useEffect(() => {
        post.getSentPosts();
    }, []); //eslint-disable-line

    return (
        <>
            <ListBox>
                {post.sentPosts !== null && post.sentPosts.length > 0 ? 
                    post.sentPosts.map((x: any) => (
                        x.map((x: any) => (
                            <Post nickName={x.nickName}
                                  content={x.content}
                                  onClick={() => console.log('gg')}
                                  />
                        ))
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
    height: 95%;
    border-radius: 10px;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.white20};
`;