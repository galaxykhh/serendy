import React from 'react';
import styled from 'styled-components';

const Announce: React.FC<{ announce: string }> = ({ announce }) => {
    return (
        <Container size='18px' >
            {announce}
        </Container>
    );
};

export default Announce;

export const Container = styled.div<{ size?: string }>`
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