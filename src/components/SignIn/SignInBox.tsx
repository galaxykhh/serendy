import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { theme } from '../../style/theme';
import { useHistorys } from '../../Hooks/useHistorys';

export interface ISignInData {
    account: string;
    password: string;
}

const SignIn: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ISignInData>();
    const history = useHistorys();

    const onSubmit: SubmitHandler<ISignInData> = loginData => {
        alert(JSON.stringify(loginData));
    }

    return (
        <Box>
            <Column>
                <Row>
                    <Icon icon={faUserAlt}
                          color={errors.account ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input placeholder='아이디'
                           {...register('account', {
                               required: '아이디를 입력해주세요',
                               pattern: { value: /^[a-zA-Z0-9]+$/, message: '영문과 숫자만을 조합하여 입력해주세요'},
                               minLength: { value: 5, message: '아이디가 너무 짧습니다' },
                               maxLength: { value: 19, message: '아이디가 너무 깁니다' },
                            })}
                            />
                </Row>
                {errors.account ? <ErrorMsg> {errors.account.message} </ErrorMsg> : 'ㅤ'}
            </Column>

            <Column>
                <Row>
                    <Icon icon={faLock}
                          color={errors.password ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input placeholder='비밀번호'
                           type='password'
                           {...register('password', {
                               required: '비밀번호를 입력해주세요',
                           })}
                           />
                </Row>
                {errors.password ? <ErrorMsg> {errors.password.message} </ErrorMsg> : 'ㅤ'}
            </Column>
            <ButtonBox>
                <Button onClick={history.pushSignUp} > 회원가입 </Button>
                <Button onClick={handleSubmit(onSubmit)} > 로그인 </Button>
            </ButtonBox>
            
            <ForgotPW onClick={history.pushFindPW} >
                비밀번호가 기억이 안나시나요?
            </ForgotPW>
        </Box>
    )
}

export default SignIn;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 600px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

const Row = styled.div`
    width: 420px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 460px;
`;

const Input = styled.input`
    all: unset;
    width: 400px;
    height: 40px;
    font-size: 21px;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.black};
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
    margin-top: 30px;
    margin-bottom: 50px;
    cursor: pointer;
    transition: .4s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.mainBlue};
    }
`;

const Icon = styled(FontAwesomeIcon)<{ color: string }>`
    font-size: 35px;
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.black};
`;

const ErrorMsg = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.red};
`;

const ForgotPW = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;