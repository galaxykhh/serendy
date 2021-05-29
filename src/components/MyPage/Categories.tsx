import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICategories } from '../../interfaces';

const Categories: React.FC<ICategories> = ({ setSelectedCategory, category, icon, text }) => {
    return (
        <Column onClick={() => setSelectedCategory(category)} >
            <Icon icon={icon} />
            <Category>{text}</Category>
        </Column>
    );
};

export default Categories;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin: 20px;
    width: 200px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
        transform: scale(1.1);
    };
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
`;

const Category = styled.div`
    margin-top: 20px;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.white};
`;