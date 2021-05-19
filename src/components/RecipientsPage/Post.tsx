import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { DisplayType } from '../../type';

export interface IPostList {
    nickName: string;
    content: string;
    didReply: boolean;
    onClick: () => void;
}

const Post: React.FC<IPostList> = ({ nickName, content, didReply, onClick }) => {
    return (
        <Box onClick={onClick} >
            <Icon icon={faEnvelope} />
            <Column>
                <FromAccount> 보낸 사람 : {nickName} </FromAccount>
                <MessagePreview> {content}  </MessagePreview>
                <Alert icon={faCircle} 
                       display={didReply ? 'block' : 'none'}
                       />
            </Column>
        </Box>
    )
}

export default Post;

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    margin-top: 8px;
    width: 95%;
    height: 60px;
    cursor: pointer;
    border-radius: 40px;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white10};
    }
`;

const Column = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 400px;
    margin-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
`;

const FromAccount = styled.div`
    font-size: 15px;
    margin-left: 10px;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.white};
`;

const MessagePreview = styled.div`
    font-size: 13px;
    margin-left: 10px;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.mainBlue};
`;

const Alert = styled(FontAwesomeIcon)<{
    display: DisplayType,
}>`
    position: absolute;
    right: 0px;
    font-size: 15px;
    display: ${({ display }) => display};
    color: ${({ theme }) => theme.colors.red};
`;