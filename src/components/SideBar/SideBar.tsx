import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import authStore from '../../store/authStore';
import { tabOpen } from '../../style/keyframes';
import ContactList from './ContactList';
import Category from './Category';
import UserInfo from './UserInfo';

type VisibleType = 'block' | 'none';

const SideBar: React.FC = observer(() => {
    return (
        <Bar visible={authStore.isSignIn ? 'block' : 'none'} >
            <UserInfo />
            <Category />
            <ContactList />
        </Bar>
    )
});

export default SideBar;

const Bar = styled.div<{visible: VisibleType}>`
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    height: 99%;
    border-radius: 30px;
    display: ${({ visible }) => visible};
    animation: ${tabOpen} 1s ease;
    padding: 10px;
    z-index: 1;
`;