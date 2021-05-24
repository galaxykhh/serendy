import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane, faSignInAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { usePush } from '../../hook/usePush';
import { theme } from '../../style/theme';
import { IBoxes } from '../../interfaces';

const Category: React.FC = () => {
    const push = usePush();

    const categoryList = [
        {
            id: 1,
            color: theme.colors.plum,
            icon: faComments,
            text: '대화 하기',
            push: push.pushChatPage,
        },
        {
            id: 2,
            color: theme.colors.plum,
            icon: faPaperPlane,
            text: '편지 보내기',
            push: push.pushPostPage,
        },
        {
            id: 3,
            color: theme.colors.yellow,
            icon: faEnvelopeOpenText,
            text: '받은 편지함',
            push: push.pushRecipientsPage,
        },
        {
            id: 4,
            color: theme.colors.yellow,
            icon: faSignInAlt,
            text: '보낸 편지함',
            push: push.pushSenderPage,
        },
    ];

    return (
        <Container>
            {categoryList.map(item => (
                <Boxes item={item}
                    key={item.id}
                />
            ))}
        </Container>
    );
};

export default Category;

const Boxes: React.FC<IBoxes>= ({ item }) => {
    const { push, color, icon, text } = item; 
    return (
        <Box onClick={push} >
            <IconBox>
                <Icon color={color}
                    icon={icon}
                />
            </IconBox>
            <Text>{text}</Text>
        </Box>
    );
};

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

const Icon = styled(FontAwesomeIcon)<{ color: string }>`
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