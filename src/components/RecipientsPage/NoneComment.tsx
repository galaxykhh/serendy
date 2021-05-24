import React from 'react';
import { IReceivedView } from '../../interfaces';
import { 
    LETTER,
    NickName,
    Content,
    CommentBox,
    Input,
    SendBtn,
} from '../RecipientsPage/View';

const NoneComment: React.FC<IReceivedView>= ({ currentReceivedPost, commentInput, sendComment }) => {
    return (
        <LETTER>
            <NickName> {currentReceivedPost?.nickName}님의 편지 </NickName>
            <Content>
                {currentReceivedPost?.content}
            </Content>
            <CommentBox>
                <Input ref={commentInput} />
                    <SendBtn onClick={sendComment} >
                        답장하기
                    </SendBtn>
                </CommentBox>
        </LETTER >
    );
};

export default NoneComment;