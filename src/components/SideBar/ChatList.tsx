import React from 'react';
import styled from 'styled-components';

const ChatList: React.FC = () => {
    return (
        <Container>
            ChatList
        </Container>
    )
}

export default ChatList;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 62.5%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black10};
`;