import React, { useEffect } from 'react';
import { flowResult } from 'mobx';
import { observer } from 'mobx-react';
import { usePush } from '../hook/usePush';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ISignInData } from '../interfaces/index';
import Container from '../components/SharedComponents/Container';
import SignInBox from '../components/SignIn/SignInBox';
import userStore from '../store/userStore';

const SignIn: React.FC = observer(() => {
    const { setError } = useForm();
    const { push } = usePush();

    const signInWithToken = async () => {
        const isSuccess = await flowResult(userStore.signInWithToken());
        if (isSuccess) push('main');
    };

    const setErrors = (): void => {
        setError('account', {
            type: 'invalid',
            message: 'ㅤ'
        });
        setError('password', {
            type: 'invalid',
            message: '아이디나 비밀번호를 다시 확인해주세요',
        });
    };

    const onSubmit: SubmitHandler<ISignInData> = async (data) => {
        const isSuccess = await userStore.signIn(data);
        if (isSuccess) {
            push('main');
        } else {
            setErrors();
        };
    };

    useEffect(() => {
        signInWithToken();
    }, []); //eslint-disable-line

    return (
        <Container>
            <SignInBox
                onSubmit={onSubmit}
                pushFindPW={() => push('findpw')}
                pushSignUp={() => push('signup')}
            />
        </Container>
    );
});

export default SignIn;