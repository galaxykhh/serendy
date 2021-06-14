import React from 'react';
import { IView } from '../../../interfaces';
import {
    LETTER,
    nickname,
    Content,
    CommentBox,
    Comment,
    Input,
    SendBtn,
} from './HaveComment'

const NoneComment: React.FC<IView> = ({ post, whatPage, commentInput, sendComment }) => {
    return (
        <LETTER>
            <nickname>{post?.nickname}님의 편지</nickname>
            <Content>
                {post?.content}
            </Content>
            {whatPage === 'sender' &&
                <CommentBox>
                    <Comment>아직 답장이 오지 않았어요</Comment>
                </CommentBox>
            }
            {whatPage === 'recipients' &&
                <CommentBox>
                    <Input ref={commentInput} />
                    <SendBtn onClick={sendComment} >답장하기</SendBtn>
                </CommentBox>
            }
        </LETTER>
    );
};

export default NoneComment;