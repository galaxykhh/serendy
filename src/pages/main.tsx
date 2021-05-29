import React from 'react'
import Container from '../components/SharedComponents/Container';
import Manual from '../components/Main/Manual';
import CenterView from '../components/SharedComponents/CenterView';

const Main: React.FC = () => {
    return (
        <Container>
            <CenterView>
                <Manual />
            </CenterView>
        </Container>
    );
};

export default Main;
