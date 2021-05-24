import React from 'react';
import { ISentView } from '../../interfaces/index';
import {
    LETTER,
    NickName,
    Content,
    CommentBox,
    Comment,
} from './View'

const NoneComment: React.FC<ISentView> = ({ currentSentPost }) => {
    return (
        <LETTER>
            <NickName>{currentSentPost?.nickName}님의 편지</NickName>
            <Content>
                {currentSentPost?.content}
            </Content>
            <CommentBox>
                <Comment>아직 답장이 오지 않았어요</Comment>
            </CommentBox>
        </LETTER>
    );
};

export default NoneComment;