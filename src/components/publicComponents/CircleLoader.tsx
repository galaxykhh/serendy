import React from 'react';
import Loader from "react-loader-spinner";
import styled from 'styled-components';
import { theme } from '../../style/theme';

const CircleLoader: React.FC = () => {
    return (
        <LoaderBox>
            <Loader type="Circles"
                color={theme.colors.plum}
                height={60}
                width={60}
            />
        </LoaderBox> 
    );
} ;

export default CircleLoader;

const LoaderBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;