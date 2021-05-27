import React, { useState } from 'react'
import styled from 'styled-components';
import ChangeNameBox from './ChangeNameBox';
import ChangePWBox from './ChangePWBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from '../../style/keyframes';
import { ICategories, MyPageType } from '../../interfaces';
import { observer } from 'mobx-react';

const categoryList = [
    {
        id: 1,
        icon: faUser,
        boolean: true,
        text: '닉네임 변경',
    },
    {
        id: 2,
        icon: faLock,
        boolean: false,
        text: '비밀번호 변경',
    },
];

const Boxes: React.FC = observer(() => {
    const [category, setCategory] = useState<MyPageType>('none');

    return (
        <BoxContainer>
            <Ment>원하시는 항목을 골라주세요</Ment>
            <Row>
                {categoryList.map(x => (
                    <Categories
                        icon={x.icon}
                        text={x.text}
                        setCategory={setCategory}
                        boolean={x.boolean}
                        key={x.id}
                    />
                ))}
            </Row>
            {category && <ChangeNameBox />}
            {!category && <ChangePWBox />}
        </BoxContainer>
    );
});

export default Boxes;

const Categories: React.FC<ICategories> = ({ setCategory, icon, text, boolean }) => {
    return (
        <Column onClick={() => setCategory(boolean)} >
            <Icon icon={icon} />
            <Category>{text}</Category>
        </Column>
    )
}

const BoxContainer = styled.div`
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

const Column = styled(Row)`
    flex-direction: column;
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

const Category = styled.div`
    margin-top: 20px;
    font-size: 21px;
    color: ${({ theme }) => theme.colors.white};
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
`;

const Ment = styled.div`
    font-size: 36px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 40px;
`;