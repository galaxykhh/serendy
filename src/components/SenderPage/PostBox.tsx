import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import View from './View';
import { ICurrentPost } from '../../Hooks/usePost';
import { IComment } from './View';

interface IPostBox {
    sentPosts: Array<any>;
    currentPost: ICurrentPost;
    content: string | undefined;
    nickName: string | undefined;
    comment: IComment | undefined;
    onClick: (_id: string) => void;
}

const PostBox: React.FC<IPostBox>= ({
    sentPosts, currentPost, content, nickName, onClick, comment,
}) => {

    return (
        <>
            <ListBox>
                {sentPosts !== null && sentPosts.length > 0 ? 
                    sentPosts.map((x, i) => (
                        <Post nickName={x.nickName}
                              content={x.content}
                              key={i}
                              onClick={() => onClick(x._id)}
                              />
                    )) :
                    <>
                    </>
                }
            </ListBox>
            <View currentPost={currentPost}
                  content={content}
                  nickName={nickName}
                  comment={comment}
                  />
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
    background-color: ${({ theme }) => theme.colors.white10};
`;