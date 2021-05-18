import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ICurrentPost } from '../../Hooks/usePost';

export interface IComment {
    _id: string;
    nickName: string | undefined;
    content: string | undefined;
}

interface IView {
    currentPost: ICurrentPost
    nickName: string | undefined;
    content: string | undefined;
    comment: IComment | undefined;
}

const View: React.FC<IView>= ({ currentPost, nickName, content, comment }) => {
    return (
        <LETTER>
            {currentPost ?
                <>
                    <NickName> {nickName}님의 편지 </NickName>
                    <Content>
                        {content}
                    </Content>
                    <CommentBox>
                        {comment?.nickName && comment?.content ? 
                            <>
                                <Column>
                                    <Icon icon={faUser} />
                                    <UserName> 유저 누구누구 </UserName>
                                </Column>
                                <Comment> 대충 코멘트 적혀있음 </Comment>
                            </> :
                            <>
                                <Input />
                                <SendBtn>
                                    답장하기
                                </SendBtn>
                            </>
                        }
                    </CommentBox>
                </> :
                <>
                </>
                
            }
        </LETTER>
    )
}

export default View;

const LETTER = styled.div`
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

const NickName = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
    font-size: 23px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    min-height: 500px;
    font-size: 20px;
    white-space: pre;
    color: ${({ theme }) => theme.colors.white};
`;

const CommentBox = styled.div`
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

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
`;

const UserName = styled.div`
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.white};
`;

const Comment = styled.div`
    margin-left: 20px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
`;

const Input = styled.textarea.attrs({
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

const SendBtn = styled.button`
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
    }
`;
