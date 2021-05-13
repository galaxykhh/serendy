import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faPaperPlane, faQuestion, faSearchDollar } from '@fortawesome/free-solid-svg-icons';

const Manual: React.FC = () => {

    return (
        <Container>
            <Box> <Icon icon={faPaperPlane} /> 가가가각 </Box>
            <Box> <Icon icon={faQuestion} /> </Box>
            <Box> <Icon icon={faAdjust} /> </Box>
            <Box> <Icon icon={faSearchDollar} /> </Box>
            <Box> <Icon icon={faSearchDollar} /> </Box>
            <Box> <Icon icon={faSearchDollar} /> </Box>
        </Container>
    )
}

export default Manual;

const Box: React.FC = ({ children }) => {
    return (
        <FlexBox>
            {children}
        </FlexBox>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-areas:
    'a b c'
    'd e f';
    width: 100%;
    min-width: 300px;
    height: 740px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.black};
`;

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;
`;
