import { faLock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userStore from '../../store/userStore';
import { pushHistory } from '../../Hooks/pushHistory';
import { IPassword } from '../../interfaces/index';

const ChangePWBox: React.FC = () => {
    const history = pushHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IPassword>();

    const onSubmit: SubmitHandler<IPassword> = (data) => {
        const userData = {
            account: userStore.user?.account,
            ...data,
        };
        userStore.changePW(userData, history.pushLogin);
    };

    return (
        <Container>
            <Column>
                <Text> 변경할 비밀번호를 입력해주세요 </Text>
                <InputBox>
                    <Icon icon={faLock} />
                    <Input placeholder='변경할 비밀번호'
                        type='password'
                        {...register('password', {
                            required: '변경할 비밀번호를 입력해주세요',
                            minLength: { value: 8, message: '비밀번호는 최소 8자리입니다' },
                            maxLength: { value: 20, message: '비밀번호는 최대 20자리입니다' },
                        })}
                    />
                </InputBox>
                <TextBox>
                    {errors.password && <ErrorMsg> {errors.password.message} </ErrorMsg>}
                </TextBox>
                <InputBox style={{ marginTop: '-15px' }} >
                    <Icon icon={faLock} />
                    <Input placeholder='비밀번호 확인'
                        type='password'
                        {...register('passwordCheck', {
                            required: true,
                            validate: check => check === watch('password'),
                        })}
                    />
                </InputBox>
                <TextBox>
                {!errors.password && errors.passwordCheck ? <ErrorMsg> 비밀번호가 일치하지 않습니다 </ErrorMsg> : <ErrorMsg>ㅤ</ErrorMsg>}
                </TextBox>
                <Button onClick={handleSubmit(onSubmit)} > 변경하기 </Button>
            </Column>
        </Container>
    );
};

export default ChangePWBox;

const Container = styled.div`
    width: 100%;
    height: 300px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    height: 30px;
`;

const Text = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
`;

const InputBox = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

const Input = styled.input`
    all: unset;
    width: 300px;
    height: 40px;
    font-size: 21px;
    margin-top: 20px;
    padding-left: 15px;
    color: ${({ theme }) => theme.colors.white};
`;

const Button = styled.button`
    all: unset;
    width: 200px;
    height: 65px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    margin-top: 5px;
    text-align: center;
    cursor: pointer;
    transition: .4s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.mainBlue};
    };
`;

const Icon = styled(FontAwesomeIcon)`
    font-size: 25px;
    margin-top: 29px;
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.white};
`;

const ErrorMsg = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.red};
`;