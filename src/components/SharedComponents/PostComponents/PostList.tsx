import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { IPostBox } from '../../../interfaces';

const PostBox: React.FC<IPostBox> = ({ posts, whatPage,showPost }) => {
    return (
        <Container>
            {Array.isArray(posts) && posts.length > 0 ?
                posts.map((x, i) => (
                    <Post
                        nickName={x.nickName}
                        content={x.content}
                        key={i}
                        replied={x.comment === undefined}
                        showPost={() => showPost(x._id!)}
                        whatPage={whatPage}
                    />
                )) :
                <Announce>아직 받은 편지가 없어요</Announce>
            }
        </Container>
    );
};

export default PostBox;

const Container = styled.div`
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

const Announce = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
    text-align: center;
    margin-top: 50px;
`;