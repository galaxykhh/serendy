import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { IPostBox } from '../../interfaces/index';

const PostBox: React.FC<IPostBox> = ({ receivedPosts, onClick }) => {
    return (
        <>
            <ListBox>
                {receivedPosts && receivedPosts.length > 0 ? 
                    receivedPosts.map((x, i) => (
                        <Post nickName={x.nickName}
                              content={x.content}
                              key={i}
                              didReply={x.comment === undefined}
                              onClick={() => onClick(x._id)}
                              />
                    )) :
                    <Ment>
                        아직 받은 편지가 없어요
                    </Ment>
                }
            </ListBox>
        </>
    );
};

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