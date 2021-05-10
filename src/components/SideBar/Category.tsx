import React from 'react';
import styled from 'styled-components';

const Category: React.FC = () => {
    return (
        <Container>
            Category
        </Container>
    )
}

export default Category;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 15%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black10};
`;