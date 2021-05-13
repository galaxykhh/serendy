import React from 'react';
import styled from 'styled-components';

interface IMessageBox {
    nickName: string,
    message: string,
};

const MessageBox: React.FC<IMessageBox>= ({ nickName, message }) => {
    return (
        <Message>
            {nickName} : {message}
        </Message>
        
    )
}

export default MessageBox;

const Message = styled.li`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.white20};
    color: ${({ theme }) => theme.colors.black};
    font-size: 17px;
    text-align: center;
`;