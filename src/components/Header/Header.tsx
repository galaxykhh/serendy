import React from 'react'
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { TEXTLOGO_URL } from '../../config';
import authStore from '../../store/authStore';
import { useHistorys } from '../../Hooks/useHistorys';

type DisplayType = 'block' | 'none';

const Header: React.FC = observer(() => {

    const history = useHistorys();

    return (
        <LogoBox visible={authStore.isSignIn ? 'block' : 'none'}
                 onClick={history.pushMain}
                 >
            <Logo />
        </LogoBox>
    );
});

export default Header;

const LogoBox = styled.div<{ visible: DisplayType }>`
    position: fixed;
    top: 5px;
    left: 10px;
    display: ${({ visible }) => visible};
    cursor: pointer;
    z-index: 1;
    @media only screen and (max-height: 640px) {
        display: none;
    }
`

const Logo = styled.div`
    width: 310px;
    height: 120px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
`;