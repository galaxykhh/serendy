import React from 'react';
import Container from '../components/SharedComponents/Container';
import FindPWBox from '../components/FindPW/FindPWBox';
import { SubmitHandler } from 'react-hook-form';
import { observer } from 'mobx-react';
import { usePush } from '../hook/usePush';
import { flowResult } from 'mobx';
import userStore from '../store/userStore';
import { IFindPW } from '../interfaces';

const FindPW: React.FC = observer(() => {
    const { push } = usePush();
    const onSubmit: SubmitHandler<IFindPW> = async (data) => {
        const isSuccess = await flowResult(userStore.findPW(data));
        if (isSuccess) push('signin');
    };

    return (
        <Container>
            <FindPWBox onSubmit={onSubmit} />
        </Container>
    );
});

export default FindPW;