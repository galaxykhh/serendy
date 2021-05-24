import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISentView } from '../../interfaces/index';
import HaveComment from './HaveComment';
import NoneComment from './NoneComment';

const View: React.FC<ISentView>= ({ currentSentPost }) => {
    if (currentSentPost && currentSentPost.comment) {
        return <HaveComment currentSentPost={currentSentPost} />
    };
    if (currentSentPost && !currentSentPost.comment) {
        return <NoneComment currentSentPost={currentSentPost} />
    };
    return null;
};

export default View;

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

export const NickName = styled.div`
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

