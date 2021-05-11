import React from 'react';
import Container from '../components/publicComponents/Container';
import CenterView from '../components/publicComponents/CenterView';
import { observer } from 'mobx-react';

const MyPage: React.FC = observer(() => {

    return (
        <Container>
            <CenterView>
                계정 정보 확인 및 변경하는 페이지
            </CenterView>
        </Container>
    );
});

export default MyPage;