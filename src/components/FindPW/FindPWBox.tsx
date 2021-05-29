import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { flowResult } from 'mobx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zoomIn } from '../../style/keyframes';
import { theme } from '../../style/theme';
import { usePush } from '../../hook/usePush';
import { IFindPW } from '../../interfaces/index';
import userStore from '../../store/userStore';
import { TextLogo } from '../SharedComponents/TextLogo';

const FindPWBox: React.FC = observer(() => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFindPW>();
    const { push } = usePush('signin');

    const onSubmit: SubmitHandler<IFindPW> = async (data) => {
        const isSuccess =  await flowResult(userStore.findPW(data));
        if (isSuccess) push();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <TextLogo />
            <Box>
                <Column>
                    <Row>
                        <Icon
                            icon={faUserAlt}
                            color={errors.account ? (theme.colors.red) : (theme.colors.white)}
                        />
                        <Input
                            placeholder='아이디'
                            {...register('account', {
                                required: '아이디를 입력해주세요',
                            })}
                        />
                    </Row>
                    {errors.account ? <ErrorMsg> {errors.account.message} </ErrorMsg> : 'ㅤ'}
                </Column>

                <Column>
                    <Row>
                        <Icon
                            icon={faUserSecret}
                            color={errors.secretMessage ? (theme.colors.red) : (theme.colors.white)}
                        />
                        <Input
                            placeholder='암호 메세지'
                            {...register('secretMessage', {
                                required: '암호 메세지를 작성해주세요',
                            })}
                        />
                    </Row>
                    {errors.secretMessage && <ErrorMsg> {errors.secretMessage.message} </ErrorMsg>}
                </Column>
                <Button
                    onClick={handleSubmit(onSubmit)}
                    type='submit'
                >
                    비밀번호 찾기
                </Button>
            </Box>
        </form>
    );
});
export default FindPWBox;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 600px;
    animation: ${zoomIn} .6s ease;
    @media only screen and (max-width: 600px) {
        justify-content: center;
        height: 450px;
    };
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        width: 320px;
        margin-bottom: 20px;
    };
`;

const Input = styled.input`
    all: unset;
    width: 400px;
    height: 40px;
    font-size: 21px;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        width: 260px;
        font-size: 17px;
    };
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
    };
    @media only screen and (max-width: 600px) {
        width: 160px;
        font-size: 17px;
    };
`;

const Icon = styled(FontAwesomeIcon) <{
    color: string
}>`
    font-size: 35px;
    color: ${({ color }) => color};
    @media only screen and (max-width: 600px) {
        font-size: 25px;
    };
`;

const ErrorMsg = styled.div`
    font-size: 16px;
    transform: translateY(-10px);
    color: ${({ theme }) => theme.colors.red};
`;