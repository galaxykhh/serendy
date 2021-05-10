import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../style/keyframes';

const MainContainer: React.FC = ({ children }) => {
    return (

        <Flex>
            {children}
        </Flex>
    )
}

export default MainContainer;

const Flex = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main40};
    animation: ${fadeIn} .5s ease;
`;