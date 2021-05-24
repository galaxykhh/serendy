import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StartLogo from '../components/Start/StartLogo';
import Blocks from '../components/Start/Blocks';
import { pushHistory } from '../Hooks/pushHistory';

const Start: React.FC = () => {

    const history = pushHistory();

    useEffect(() => {
        Aos.init();
    },[]);

    return (
        <Wallpaper>
            <StartLogo push={history.pushMain} />
            <Blocks push={history.pushMain} />
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