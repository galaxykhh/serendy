import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IView } from '../../../interfaces';

const HaveComment: React.FC<IView>= ({ post }) => {
    return (
        <LETTER>
            <nickname> {post?.nickname}님의 편지 </nickname>
            <Content>{post?.content}</Content>
            <CommentBox>
                    <Column>
                        <Icon icon={faUser} />
                        <UserName> {post?.comment?.nickname} </UserName>
                    </Column>
                    <Comment> {post?.comment?.content} </Comment>
            </CommentBox>
        </LETTER >
    );
};

export default HaveComment;


export const LETTER = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 69%;
    height: 740px;
    min-height: 740px;
    max-height: 740px;
    margin-top: 10px;
    border-radius: 10px;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.white10};
`;

export const nickname = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    font-size: 23px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
    width: 80%;
    min-height: 500px;
    font-size: 18px;
    white-space: pre;
    border-radius: 10px;
    padding: 20px;
    color: ${({ theme }) => theme.colors.white};
`;

export const CommentBox = styled.div`
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    width: 80%;
    white-space: nowrap;
    overflow: auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120px;
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
`;

export const UserName = styled.div`
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Comment = styled.div`
    margin-left: 20px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.textarea.attrs({
    placeholder: '아직 답장을 안하셨네요, 답장을 보내보세요!',
})`
    outline-style: none;
    -webkit-appearance: none;
    background-color: rgba(0,0,0,0);
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    background-color: none;
    border-radius: 10px;
    padding-left: 5px;
    width: 85%;
    height: 120px;
    resize: none;
    overflow: hidden;
    line-height: 1.6;
`;

export const SendBtn = styled.button`
    all: unset;
    position: absolute;
    right: 10px;
    width: 13%;
    height: 120px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.main60};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    transition: .4s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.mainBlue};
    };
`;