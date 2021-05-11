import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface IChatRoom {
    item: {
        messageContent: string;
        stranger: string;
    }
}

const Message: React.FC<IChatRoom> = ({ item }) => {
    const { messageContent, stranger } = item;
    return (
        <Box>
            <Icon icon={faEnvelope} />
            <Column>
                <Stranger> {stranger} </Stranger>
                <RoomTitle> {messageContent}  </RoomTitle>
            </Column>
        </Box>
    )
}

export default Message;

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
        background-color: ${({ theme }) => theme.colors.white50};
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 25px;
    color: ${({ theme }) => theme.colors.black};
`;

const Stranger = styled.div`
    font-size: 17px;
    margin-left: 10px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.black};
`;

const RoomTitle = styled.div`
    font-size: 13px;
    margin-left: 10px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.white};
`;