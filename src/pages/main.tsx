import React from 'react'
import Container from '../components/publicComponents/Container';
import Manual from '../components/Main/Manual';
import CenterView from '../components/publicComponents/CenterView';

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
