import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePost } from '../../Hooks/usePost';
import Post from './Post';
import View from './View';
import { ICurrentPost } from '../../Hooks/usePost';
import { IComment } from './View';

interface IPostBox {
    receivedPosts: Array<any>;
    currentPost: ICurrentPost;
    content: string | undefined;
    nickName: string | undefined;
    comment: IComment | undefined;
    onClick: (_id: string) => void;
}

const PostBox: React.FC<IPostBox> = ({
    receivedPosts, currentPost, content, nickName, comment, onClick
}) => {
    const post = usePost();

    useEffect(() => {
        post.getReceivedPosts();
    }, []); //eslint-disable-line

    return (
        <>
            <ListBox>
                {receivedPosts !== null && receivedPosts.length > 0 ? 
                    receivedPosts.map((x, i) => (
                        <Post nickName={x.nickName}
                              content={x.content}
                              key={i}
                              onClick={() => onClick(x._id)}
                              />
                    )) :
                    <Ment>
                        아직 받은 편지가 없어요
                    </Ment>
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

const Ment = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    text-align: center;
    margin-top: 50px;
`;