import React from 'react';
import styled from 'styled-components';

const UserInfo: React.FC = () => {
    return (
        <Container>
            User Info
        </Container>
    )
}

export default UserInfo;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black10};
`;