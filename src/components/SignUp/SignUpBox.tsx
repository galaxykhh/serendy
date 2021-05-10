import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLock, faUserAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { theme } from '../../style/theme';
import serendyRepository from '../../repository/serendyRepository';

export interface ISignUpData {
    account: string;
    password: string;
    check: string;
    secretMessage: string;
}
const SignUpBox: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignUpData>();
    const [isAlready, setIsAlready] = useState<boolean>(false); // is account checked duplicated ?

    const signUp = async (data: ISignUpData): Promise<void> => {
        try{
            const response = await serendyRepository.signUp(data);
            if ((response.data.message = 'SignUp Success')) {
                alert('회원가입이 완료되었습니다');
            }
        } catch(err) {
            alert('현재 서버가 점검중입니다');
        };
    };

    const accountCheck = () => {

    };

    const onSubmit: SubmitHandler<ISignUpData> = (data) => {
        if (!isAlready) {
            alert('중복확인을 해주세요');
            return;
        }
        signUp(data);
    };

    useEffect(() => {
        setIsAlready(false);
    }, [watch('account')]); // eslint-disable-line

    return (
        <Box data-aos='zoom-in'>
            <Column>
                <Row>
                    <Icon icon={faUserAlt}
                          color={errors.account ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input placeholder='아이디'
                           {...register('account', {
                               required: '아이디를 입력해주세요',
                               pattern: { value: /^[a-zA-Z0-9]+$/, message: '영문과 숫자만을 조합하여 입력해주세요'},
                               minLength: { value: 6, message: '아이디는 최소 6자리입니다' },
                               maxLength: { value: 15, message: '아이디는 최대 15자리입니다' },
                           })}
                           />
                    <DupliBtn onClick={() => setIsAlready(true)}> 중복확인 </DupliBtn>
                </Row>
                {errors.account ? <ErrorMsg> {errors.account.message} </ErrorMsg> : <Msg>ㅤ</Msg>}
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
                               minLength: { value: 8, message: '비밀번호는 최소 8자리입니다' },
                               maxLength: { value: 20, message: '비밀번호는 최대 20자리입니다' }
                           })}
                           />
                </Row>
                {errors.password ? <ErrorMsg> {errors.password.message} </ErrorMsg> : <Msg>ㅤ</Msg>}
            </Column>
            <Column>
                <Row>
                    <Icon icon={faCheck}
                          color={errors.check ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input placeholder='비밀번호 확인'
                           type='password'
                           {...register('check', {
                               required: true,
                               validate: check => check === watch('password'),
                           })}
                           />
                </Row>
                {!errors.password && errors.check ? <ErrorMsg> 비밀번호가 일치하지 않습니다 </ErrorMsg> : <Msg>ㅤ</Msg>}
            </Column>
            <Column>
                <Row>
                    <Icon icon={faUserSecret}
                          color={errors.secretMessage ? (theme.colors.red) : (theme.colors.black)}
                          />
                    <Input placeholder='암호 메세지'
                           {...register('secretMessage', {
                               required: '암호 메세지를 작성해주세요',
                               minLength: { value: 3, message: '암호 메세지는 최소 3자 입니다' },
                               maxLength: { value: 20, message: '암호 메시지는 최대 20자 입니다' }
                           })}
                           />
                </Row>
                {errors.secretMessage ? 
                                        <>
                                            <ErrorMsg> {errors.secretMessage.message} </ErrorMsg>
                                            <Msg>ㅤ</Msg>
                                        </> :
                                        <>
                                            <Msg> 암호 메세지는 나중에 비밀번호 찾기에 사용됩니다 </Msg>
                                            <Msg> 자신만의 개성 넘치는 단어로 설정해보세요! </Msg>
                                        </>
                }
            </Column>
                <Button onClick={handleSubmit(onSubmit)} > 확인 </Button>
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
    margin-bottom: 10px;
`;

const Row = styled.div`
    width: 420px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
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
    height: 55px;
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
    height: 40px;
    margin-bottom: 10px;
    margin-top: 0;
    transform: trans
`;

const Icon = styled(FontAwesomeIcon)<{ color: string }>`
    font-size: 35px;
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.black};
`;

const ErrorMsg = styled.div`
    font-size: 15px;
    transform: translateY(-10px);
    color: ${({ theme }) => theme.colors.red};
`;

const Msg = styled(ErrorMsg)`
    color: ${({ theme }) => theme.colors.black};
`;