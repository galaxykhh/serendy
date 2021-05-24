import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IReceivedView } from '../../interfaces';
import { 
    LETTER,
    NickName,
    Content,
    Comment,
    CommentBox,
    Column,
    Icon,
    UserName,
} from '../RecipientsPage/View';

const HaveComment: React.FC<IReceivedView>= ({ currentReceivedPost }) => {
    return (
        <LETTER>
            <NickName> {currentReceivedPost?.nickName}님의 편지 </NickName>
            <Content>
                {currentReceivedPost?.content}
            </Content>
            <CommentBox>
                    <Column>
                        <Icon icon={faUser} />
                        <UserName> {currentReceivedPost?.comment?.nickName} </UserName>
                    </Column>
                    <Comment> {currentReceivedPost?.comment?.content} </Comment>
            </CommentBox>
        </LETTER >
    );
};

export default HaveComment;