import React from 'react';
import styled from 'styled-components';
import { Text, Icon } from './UserInfo';
import { IMenu } from '../../../interfaces';

const Menu: React.FC<IMenu> = ({ item }) => {
    const { onClick, icon, text } = item;
    return (
        <Container onClick={onClick} >
            <Icon
                icon={icon}
                iconsize='24px'
            />
            <Text
                mt='8px'
                size='14px'
            >
                {text}
            </Text>
        </Container>
    );
};

export default Menu;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    min-width: 40px;
    padding: 5px;
    margin: 5px;
    transition: .3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.main60};
    };
    @media only screen and (max-width: 600px) {
        min-width: 40px;
        margin-top: 10px;
    };
`;
