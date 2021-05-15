import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import userStore from '../../store/userStore';
import { slideLeft } from '../../style/keyframes';
import ContactList from './ContactList';
import Category from './Category';
import UserInfo from './UserInfo';
import { DisplayType } from '../../type';

const SideBar: React.FC = observer(() => {
    return (
        <Bar visible={userStore.isSignIn ? 'block' : 'none'} >
            <UserInfo />
            <Category />
            <ContactList />
        </Bar>
    )
});

export default SideBar;

const Bar = styled.div<{
    visible: DisplayType
}>`
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 19%;
    height: 99%;
    border-radius: 5px;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    display: ${({ visible }) => visible};
    animation: ${slideLeft} 1s ease;
    transition: 1s ease;
    padding: 10px;
    z-index: 1;
    @media only screen and (max-width: 500px) {
        right: -300px;
    }
`;