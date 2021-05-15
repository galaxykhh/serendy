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
    left: 5px;
    bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80.5%;
    min-width: 300px;
    height: 80%;
    border-radius: 30px;
    padding: 10px;
    transition: 1s ease;
    z-index: 1;
    @media only screen and (max-width: 500px) {
        width: 96%;
    }
`;