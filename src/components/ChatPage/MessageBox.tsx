import React from 'react';
import styled from 'styled-components';

const MessageBox: React.FC<{ message: string }>= ({ message }) => {
    return (
        <Message>
            {message}
        </Message>
    )
}

export default MessageBox;

const Message = styled.li`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.white20};
    color: ${({ theme }) => theme.colors.white};
    font-size: 17px;
    text-align: center;
`;