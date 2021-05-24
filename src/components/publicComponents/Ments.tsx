import React from 'react';
import styled from 'styled-components';

const Ments: React.FC<{ ment: string }> = ({ ment }) => {
    return (
        <Ment size='18px' >
            {ment}
        </Ment>
    )
}

export default Ments;

export const Ment = styled.div<{ size?: string }>`
    font-size: 17px;
    margin-bottom: 10px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1520px) {
        font-size: 15px;
    };
    @media only screen and (max-width: 600px) {
        font-size: 11px;
    };
`;