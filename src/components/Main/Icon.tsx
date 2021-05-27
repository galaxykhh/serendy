import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconBox: React.FC<{ icon: any }>= ({icon}) => {
    return (
        <Icon icon={icon} />
    );
};

export default IconBox;

const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
    font-size: 50px;
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    };
`;