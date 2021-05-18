import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface IPostList {
    nickName: string;
    content: string;
    onClick: () => void;
}

const Post: React.FC<IPostList> = ({ nickName, content, onClick }) => {

    return (
        <Box onClick={onClick} >
            <Icon icon={faEnvelope} />
            <Column>
                <Stranger> 보낸 사람 : {nickName} </Stranger>
                <MessagePreview> {content}  </MessagePreview>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 400px;
    margin-left: 20px;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
`;

const Stranger = styled.div`
    font-size: 17px;
    margin-left: 10px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.white};
`;

const MessagePreview = styled.div`
    font-size: 13px;
    margin-left: 10px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.black};
`;