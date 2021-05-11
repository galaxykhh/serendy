import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

interface IChatRoom {
    roomTitle: string;
}

const ChatRoom: React.FC<IChatRoom> = ({ roomTitle }) => {
    return (
        <Box>
            <Icon icon={faComment} />
            <RoomTitle> {roomTitle}  </RoomTitle>
        </Box>
    )
}

export default ChatRoom;

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    margin-top: 8px;
    width: 95%;
    height: 50px;
    cursor: pointer;
    border-radius: 40px;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white20};
    }
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 25px;
`;

const RoomTitle = styled.div`
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;