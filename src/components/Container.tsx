import React from 'react';
import styled from 'styled-components';

const Container: React.FC = ({ children }) => {
    return (
        <Flex>
            {children}
        </Flex>
    )
}

export default Container;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;