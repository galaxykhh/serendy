import React from 'react'
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { TEXTLOGO_URL } from '../../config';
import userStore from '../../store/userStore';
import { usePush } from '../../hook/usePush';
import { DisplayType } from '../../interfaces';

const Header: React.FC = observer(() => {
    const { push } = usePush();

    return (
        <LogoBox
            visible={userStore.user ? 'block' : 'none'}
            onClick={push}
        >
            <Logo />
        </LogoBox>
    );
});

export default Header;

const LogoBox = styled.div<{ visible: DisplayType }>`
    position: fixed;
    top: 5px;
    left: 20px;
    display: ${({ visible }) => visible};
    cursor: pointer;
    z-index: 1;
`;

const Logo = styled.div`
    width: 310px;
    height: 120px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
    @media only screen and (max-height: 700px) {
        width: 220px;
        height: 90px;
    };
    @media only screen and (max-width: 600px) {
        width: 150px;
        height: 60px;
    };
`;