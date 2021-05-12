import React from 'react';
import styled from 'styled-components';

const CenterView: React.FC = ({ children }) => {

    return (
        <Screen>
            {children}
        </Screen>
    )
}

export default CenterView;

const Screen = styled.div`
    position: absolute;
    left: 10px;
    bottom: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80.5%;
    min-width: 300px;
    height: 81.5%;
    border-radius: 30px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.black10};
    transition: 1s ease;
    z-index: 1;
    @media only screen and (max-width: 500px) {
        width: 96%;
    }
`;