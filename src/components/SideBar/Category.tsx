import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useHistorys } from '../../Hooks/useHistorys';

const Category: React.FC = () => {

    const history = useHistorys();

    return (
        <Container>
            <Box onClick={history.pushChatPage}>
                <IconBox>
                    <Icon icon={faComments} />
                </IconBox>
                <Text> 대화 하기 </Text>
            </Box>
            <Box onClick={history.pushPostPage} >
                <IconBox>
                    <Icon icon={faPaperPlane} />
                </IconBox>
                <Text> 편지 보내기 </Text>
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
    padding-top: 2px;
    width: 100%;
    height: 15%;
    min-width: 80px;
    min-height: 40px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black20};
    @media only screen and (max-height: 620px) {
        flex-direction: row;
    };
`;

const IconBox = styled.div`
    min-width: 33px;
    min-height: 26px;
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 26px;
    color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.black};
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-height: 620px) {
        font-size: 12px;
    }
`;

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    margin-top: 3px;
    margin-bottom: 5px;
    width: 95%;
    height: 40%;
    min-width: 80px;
    min-height: 30px;
    cursor: pointer;
    border-radius: 40px;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white50};
    }
`;