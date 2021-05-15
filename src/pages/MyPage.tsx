import React from 'react';
import Container from '../components/publicComponents/Container';
import CenterView from '../components/publicComponents/CenterView';
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