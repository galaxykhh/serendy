import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import userStore from '../../store/userStore';
import { slideLeft } from '../../style/keyframes';
import Category from './Category/Category';
import UserInfo from './UserInfo/UserInfo';
import { DisplayType } from '../../interfaces/index';

const SideBar: React.FC = observer(() => {
    return (
        <Bar visible={userStore.user ? 'block' : 'none'} >
            <UserInfo />
            <Category />
        </Bar>
    );
});

export default SideBar;

const Bar = styled.div<{ visible: DisplayType }>`
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    max-width: 300px;
    height: 99%;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    display: ${({ visible }) => visible};
    animation: ${slideLeft} 1s ease;
    transition: 1s ease;
    padding: 10px;
    z-index: 1;
    @media only screen and (max-width: 1450px) {
        min-width: 220px;
    };
    @media only screen and (max-width: 1115px) {
        min-width: 100px;
    };
    @media only screen and (max-width: 600px) {
        min-width: 40px;
        padding: 0px;
    };
`;