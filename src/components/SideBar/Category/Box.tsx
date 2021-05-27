import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IBox } from '../../../interfaces/index';

const Box: React.FC<IBox> = ({ item }) => {
    const { color, icon, text, push } = item;

    return (
        <Container onClick={push}>
            <IconBox>
                <Icon
                    color={color}
                    icon={icon}
                />
            </IconBox>
            <Text>{text}</Text>
        </Container>
    );
};

export default Box;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    margin-top: 3px;
    margin-bottom: 5px;
    width: 95%;
    min-height: 50px;
    max-height: 60px;
    min-width: 40px;
    cursor: pointer;
    border-radius: 10px;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.main60};
    };
    @media only screen and (max-width: 600px) {
        justify-content: center;
        padding: 0px;
    };
`;

const IconBox = styled.div`
    min-width: 40px;
    min-height: 26px;
    @media only screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    };
`;

const Icon = styled(FontAwesomeIcon)<{ color: string }>`
    font-size: 26px;
    color: ${({ color }) => color};
`;

const Text = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-width: 1115px) {
        display: none;
    };
`;

