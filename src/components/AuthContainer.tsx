import React from 'react';
import styled from 'styled-components';

const AuthContainer: React.FC = ({ children }) => {
    return (

        <Flex>
            {children}
        </Flex>
    )
}

export default AuthContainer;

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
    background: linear-gradient(
        white, ${({ theme }) => theme.colors.mainBlue}
    );
`;