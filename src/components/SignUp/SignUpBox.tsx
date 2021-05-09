import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { theme } from '../../style/theme';

interface Inputs {
    account: string;
    password: string;
    check: string;
}
const SignUpBox: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        alert(JSON.stringify(data));
    };

    return (
        <Box data-aos='zoom-in-down'>
            <div style={{ fontSize: '24px', marginBottom: '35px', marginTop: '5px' }} > 사용하고 싶은 아이디와 비밀번호를 입력해주세요 </div>
            <Column>
                <AccountRow>
                    <Icon icon={faUserAlt}
                          color={errors.account ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input {...register('account', {
                        required: '아이디를 입력해주세요',
                        pattern: { value: /^[a-zA-Z0-9]+$/, message: '영문과 숫자만을 조합하여 입력해주세요'},
                        minLength: { value: 5, message: '아이디는 최소 5자 이상입니다' },
                        maxLength: { value: 17, message: '아이디는 최대 17자 입니다' },
                    })}
                    placeholder='아이디'
                    />
                    <DupliBtn onClick={handleSubmit(onSubmit)} > 중복확인 </DupliBtn>
                </AccountRow>
                {errors.account ? <ErrorMsg> {errors.account.message} </ErrorMsg> : 'ㅤ'}
            </Column>
            <Column>
                <Row>
                    <Icon icon={faLock}
                          color={errors.password ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input {...register('password', {
                       required: '비밀번호를 입력해주세요',
                    })}
                       type='password'
                       placeholder='비밀번호'
                    />
                </Row>
                {errors.password ? <ErrorMsg> {errors.password.message} </ErrorMsg> : 'ㅤ'}
            </Column>
            <Column>
                <Row>
                    <Icon icon={faCheck}
                          color={errors.check ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input {...register('check', {
                        required: true,
                        validate: check => check === watch('password'),
                    })}
                       type='password'
                       placeholder='비밀번호 확인'
                    />
                </Row>
                {errors.check ? <ErrorMsg> 비밀번호가 일치하지 않습니다 </ErrorMsg> : 'ㅤ'}
            </Column>
                <Button onClick={handleSubmit(onSubmit)} > 회원가입 </Button>
        </Box>
    )
}

export default SignUpBox;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 640px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const AccountRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 460px;
`;

const Input = styled.input`
    all: unset;
    width: 400px;
    height: 60px;
    font-size: 23px;
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    padding-left: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 20px;
`;

const Button = styled.button`
    all: unset;
    width: 200px;
    height: 65px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.mainBlue};
    }
`;

const DupliBtn = styled(Button)`
    width: 170px;
    height: 50px;
    margin-bottom: 10px;
    margin-top: 0;
`;

const Icon = styled(FontAwesomeIcon)<{ color: string }>`
    font-size: 35px;
    height: 52px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    color: ${({ color }) => color}
`;

const ErrorMsg = styled.div`
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
`;