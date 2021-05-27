import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StartLogo from '../components/Start/StartLogo';
import Layout from '../components/Start/Layout';
import { usePush } from '../hook/usePush';

const Start: React.FC = () => {
    const { push } = usePush('main');

    useEffect(() => {
        Aos.init();
    },[]);

    return (
        <Wallpaper>
            <StartLogo push={push} />
            <Layout push={push} />
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