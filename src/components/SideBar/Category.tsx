import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane, faSignInAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { useHistorys } from '../../Hooks/useHistorys';
import { theme } from '../../style/theme';

const Category: React.FC = () => {

    const history = useHistorys();

    return (
        <Container>
            <Box onClick={history.pushChatPage}>
                <IconBox>
                    <Icon color={theme.colors.plum}
                          icon={faComments} />
                </IconBox>
                <Text> 대화 하기 </Text>
            </Box>
            <Box onClick={history.pushPostPage} >
                <IconBox>
                    <Icon color={theme.colors.plum}
                          icon={faPaperPlane} />
                </IconBox>
                <Text> 편지 보내기 </Text>
            </Box>
            <Box onClick={history.pushRecipientsPage} >
                <IconBox>
                    <Icon color={theme.colors.yellow}
                          icon={faEnvelopeOpenText} />
                </IconBox>
                <Text> 받은 편지함 </Text>
            </Box>
            <Box onClick={history.pushSenderPage} >
                <IconBox>
                    <Icon color={theme.colors.yellow}
                          icon={faSignInAlt} />
                </IconBox>
                <Text> 보낸 편지함 </Text>
            </Box>
        </Container>
    );
};

export default Category;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    padding-top: 2px;
    width: 100%;
    height: 70%;
    min-width: 40px;
    min-height: 40px;
`;

const IconBox = styled.div`
    min-width: 40px;
    min-height: 26px;
    @media only screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    };
`;

const Icon = styled(FontAwesomeIcon)<{
    color: string,
}>`
    font-size: 26px;
    color: ${({ color }) => color};
`;

const Text = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-width: 1115px) {
        display: none;
    };
`;

const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    margin-top: 3px;
    margin-bottom: 5px;
    width: 95%;
    min-height: 50px;
    max-height: 60px;
    min-width: 40px;
    cursor: pointer;
    border-radius: 10px;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.main60};
    };
    @media only screen and (max-width: 600px) {
        justify-content: center;
        padding: 0px;
    };
`;