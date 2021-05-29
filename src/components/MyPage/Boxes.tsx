import React, { useState } from 'react'
import styled from 'styled-components';
import ChangeNameBox from './ChangeNameBox';
import ChangePWBox from './ChangePWBox';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from '../../style/keyframes';
import { ICategoryList, MyPageType } from '../../interfaces';
import { observer } from 'mobx-react';
import Categories from './Categories';

const categoryList: ICategoryList[] = [
    {
        id: 1,
        icon: faUser,
        category: 'changeName',
        text: '닉네임 변경',
    },
    {
        id: 2,
        icon: faLock,
        category: 'changePW',
        text: '비밀번호 변경',
    },
];

const Boxes: React.FC = observer(() => {
    const [selectedCategory, setSelectedCategory] = useState<MyPageType>('none');

    return (
        <Container>
            <Announce>원하시는 항목을 골라주세요</Announce>
            <Row>
                {categoryList.map(x => (
                    <Categories
                        icon={x.icon}
                        text={x.text}
                        setSelectedCategory={setSelectedCategory}
                        category={x.category}
                        key={x.id}
                    />
                ))}
            </Row>
            {selectedCategory === 'changeName' && <ChangeNameBox />}
            {selectedCategory === 'changePW' && <ChangePWBox />}
        </Container>
    );
});

export default Boxes;

const Container = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 1s ease;
    @media only screen and (max-width: 1450px) {
        flex-direction: column;
    };
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
`;

const Announce = styled.div`
    font-size: 36px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 40px;
`;