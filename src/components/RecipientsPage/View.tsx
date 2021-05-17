import React from 'react';
import styled from 'styled-components';

const View: React.FC = () => {
    return (
        <LETTER>
            
        </LETTER>
    )
}

export default View;

const LETTER = styled.div`
    width: 69%;
    height: 95%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white20};
`;