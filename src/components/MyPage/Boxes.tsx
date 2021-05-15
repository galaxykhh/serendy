import React, { useState } from 'react'
import styled from 'styled-components';
import ChangeNameBox from './ChangeNameBox';
import ChangePWBox from './ChangePWBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from '../../style/keyframes';

const Boxes: React.FC = () => {
    const [category, setCategory] = useState<boolean | string>('none');

    return (
        <BoxContainer>
            <Ment> 원하시는 항목을 골라주세요 </Ment>
            <Row>
                <Column onClick={() => setCategory(true)} >
                    <Icon icon={faUser} />
                    <Category> 닉네임 변경 </Category>
                </Column>
                <Column onClick={() => setCategory(false)} >
                    <Icon icon={faLock} />
                    <Category> 비밀번호 변경 </Category>
                </Column>
            </Row>
            {category === true && <ChangeNameBox />}
            {category === false && <ChangePWBox />}
        </BoxContainer>

    )
}

export default Boxes;

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
    }
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
    }
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