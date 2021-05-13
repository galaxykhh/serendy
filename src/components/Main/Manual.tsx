import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faPaperPlane, faComments, faSearchDollar } from '@fortawesome/free-solid-svg-icons';

const Manual: React.FC = () => {

    return (
        <Container>
            <Box>
                <Icon icon={faPaperPlane} />
                <Text> 비행기 </Text>
            </Box>
            <Box>
                <Icon icon={faComments} />
                <Text> 잡담 </Text>
            </Box>
            <Box>
                <Icon icon={faAdjust} />
                <Text> 반달 </Text>
            </Box>
            <Box>
                <Icon icon={faSearchDollar} />
                <Text> 돈찾는중 </Text>
            </Box>
            <Box>
                <Icon icon={faSearchDollar} />
                <Text> 돈찾는중 </Text>
            </Box>
            <Box>
                <Icon icon={faSearchDollar} />
                <Text> 돈찾는중 </Text>
            </Box>
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

const Text = styled.div`
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.white};
`;
