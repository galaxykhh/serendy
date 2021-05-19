import React from 'react';
import styled from 'styled-components';
import Post from './Post';

interface IPostBox {
    sentPosts: Array<any>;
    onClick: (_id: string) => void;
}

const PostBox: React.FC<IPostBox>= ({ sentPosts, onClick }) => {
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
                    <Ment>
                        아직 보낸 편지가 없어요
                    </Ment>
                }
            </ListBox>
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