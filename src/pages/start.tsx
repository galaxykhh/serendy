import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StartLogo from '../components/Start/StartLogo';
import Blocks from '../components/Start/Blocks';

const Start: React.FC = () => {
    const history = useHistory();
    useEffect(() => {
        Aos.init();
    },[]);
    
    const pushMain = () => {
        history.push('/main');
    }

    return (
        <Wallpaper>
            <StartLogo push={pushMain} />
            <Blocks push={pushMain} />
        </Wallpaper>
    )
}

export default Start

const Wallpaper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        white, ${({ theme }) => theme.colors.mainBlue} 60%, white 100%
    );
`;