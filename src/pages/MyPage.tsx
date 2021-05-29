import React from 'react';
import Container from '../components/SharedComponents/Container';
import CenterView from '../components/SharedComponents/CenterView';
import { observer } from 'mobx-react';
import Boxes from '../components/MyPage/Boxes';

const MyPage: React.FC = observer(() => {
    return (
        <Container>
            <CenterView>
                <Boxes />
            </CenterView>
        </Container>
    );
});

export default MyPage;