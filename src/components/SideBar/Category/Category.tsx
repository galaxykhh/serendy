import React from 'react';
import styled from 'styled-components';
import { faComments, faPaperPlane, faSignInAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { usePush } from '../../../hook/usePush';
import { theme } from '../../../style/theme';
import Box from './Box';

const Category: React.FC = () => {
    const { push } = usePush();

    const categoryList = [
        {
            id: 1,
            color: theme.colors.plum,
            icon: faComments,
            text: '대화 하기',
            push: () => push('chat'),
        },
        {
            id: 2,
            color: theme.colors.plum,
            icon: faPaperPlane,
            text: '편지 보내기',
            push: () => push('post'),

        },
        {
            id: 3,
            color: theme.colors.yellow,
            icon: faEnvelopeOpenText,
            text: '받은 편지함',
            push: () => push('recipients'),
        },
        {
            id: 4,
            color: theme.colors.yellow,
            icon: faSignInAlt,
            text: '보낸 편지함',
            push: () => push('sender'),
        },
    ];

    return (
        <Container>
            {categoryList.map(item => (
                <Box
                    item={item}
                    key={item.id}
                />
            ))}
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