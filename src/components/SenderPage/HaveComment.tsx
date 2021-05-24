import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ISentView } from '../../interfaces/index';
import {
    LETTER,
    NickName,
    Content,
    CommentBox,
    Column,
    Icon,
    UserName,
    Comment
} from './View'

const HaveComment: React.FC<ISentView>= ({ currentSentPost }) => {
    return (
        <LETTER>
            <NickName>{currentSentPost?.nickName}님의 편지</NickName>
            <Content>{currentSentPost?.content}</Content>
            <CommentBox>
                <Column>
                    <Icon icon={faUser} />
                    <UserName>{currentSentPost?.comment?.nickName}</UserName>
                </Column>
                <Comment> {currentSentPost?.comment?.content} </Comment>
            </CommentBox>
        </LETTER>
    );
};

export default HaveComment