import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Category: React.FC = () => {
    return (
        <Container>
            <Box>
                <IconBox>
                    <Icon icon={faComments} />
                </IconBox>
                <Text> 대화하기 </Text>
            </Box>
            <Box>
                <IconBox>
                    <Icon icon={faEnvelope} />
                </IconBox>
                <Text> 편지쓰기 </Text>
            </Box>
        </Container>
    )
}

export default Category;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 15%;
    min-height: 136px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black10};

`;

const IconBox = styled.div`
    min-width: 33px;
    min-height: 26px;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 26px;
`;

const Text = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    margin-left: 8px;
`;

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    margin-bottom: 7px;
    width: 95%;
    height: 40%;
    min-height: 30px;
    cursor: pointer;
    border-radius: 40px;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white20};
    }
`;