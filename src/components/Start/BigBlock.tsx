import React from 'react';
import styled from 'styled-components';
import { Text, Space } from './Announces'
import { IBigBlock } from '../../interfaces';
const BigBlock: React.FC<IBigBlock> = ({ item }) => {
    const { title, subtitle } = item;

    return (
        <>
            <Text
                data-aos='fade-up'
                data-aos-anchor-placement='center-center'
                data-aos-duration='900'>
                {title}
            </Text>
            <SmallText
                data-aos='fade-up'
                data-aos-anchor-placement='center-center'
                data-aos-duration='900'>
                {subtitle}
            </SmallText>
            <Space />
        </>
    );
};

export default BigBlock;

const SmallText = styled.div<{ size?: string }>`
    font-size: 28px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-bottom: 50px;
    white-space: pre;
    @media only screen and (max-width: 600px) {
        font-size: 18px;
    };
`;