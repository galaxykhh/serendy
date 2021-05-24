import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StartLogo from '../components/Start/StartLogo';
import Blocks from '../components/Start/Blocks';
import { usePush } from '../hook/usePush';

const Start: React.FC = () => {
    const push = usePush();

    useEffect(() => {
        Aos.init();
    },[]);

    return (
        <Wallpaper>
            <StartLogo push={push.pushMain} />
            <Blocks push={push.pushMain} />
        </Wallpaper>
    );
};

export default Start;

const Wallpaper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
`;