import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import authStore from '../../store/authStore';
import { tabOpen } from '../../style/keyframes';
import ChatList from './ChatList';
import Category from './Category';
import UserInfo from './UserInfo';

type VisibleType = 'block' | 'none';

const SideBar: React.FC = observer(() => {
    return (
        <Bar visible={authStore.isLogged ? 'block' : 'none'} >
            <UserInfo />
            <Category />
            <ChatList />
        </Bar>
    )
});

export default SideBar;

const Bar = styled.div<{visible: VisibleType}>`
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 98%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black10};
    display: ${({ visible }) => visible};
    animation: ${tabOpen} 1s ease;
    padding: 10px;
    z-index: 1;
`;