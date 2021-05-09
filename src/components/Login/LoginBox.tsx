import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { theme } from '../../style/theme';
import { useHistorys } from '../../Hooks/useHistorys';

interface Inputs {
    account: string;
    password: string;
}
const LoginBox: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ mode: 'onChange' });
    const history = useHistorys();

    return (
        <Box>
            <Column>
                <Row>
                    <Icon icon={faUserAlt}
                          color={errors.account ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input {...register('account', {
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
                    <Input {...register('password', {
                       required: '비밀번호를 입력해주세요',
                    })}
                       type='password'
                    />
                </Row>
                {errors.password ? <ErrorMsg> {errors.password.message} </ErrorMsg> : 'ㅤ'}
            </Column>
            <ButtonBox>
                <Button onClick={history.pushSignUp} > 회원가입 </Button>
                <Button> 로그인 </Button>
            </ButtonBox>
            
            <ForgotPW onClick={history.pushFindPW} >
                비밀번호가 기억이 안나세요?
            </ForgotPW>
        </Box>
    )
}

export default LoginBox;

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
`;

const Row = styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    height: 52px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    color: ${({ color }) => color}
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