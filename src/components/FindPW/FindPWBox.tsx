import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zoomIn } from '../../style/keyframes';
import { theme } from '../../style/theme';
import userStore from '../../store/userStore';
import { pushHistory } from '../../Hooks/pushHistory';
import { IFindPW } from '../../interfaces/index';

const FindPWBox: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFindPW>();
    const history = pushHistory();
    const findBtn = useRef<HTMLButtonElement>(null);

    const entered = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') {
            findBtn.current?.click();
        };
    };

    const onSubmit: SubmitHandler<IFindPW> = (data) => {
        userStore.findPW(data, history.pushLogin);
    };

    return (
        <Box>
            <Column>
                <Row>
                    <Icon icon={faUserAlt}
                        color={errors.account ? (theme.colors.red) : (theme.colors.white)}
                    />
                    <Input placeholder='아이디'
                        {...register('account', {
                            required: '아이디를 입력해주세요',
                        })}
                    />
                </Row>
                {errors.account ? <ErrorMsg> {errors.account.message} </ErrorMsg> : 'ㅤ'}
            </Column>

            <Column>
                <Row>
                    <Icon icon={faUserSecret}
                        color={errors.secretMessage ? (theme.colors.red) : (theme.colors.white)}
                    />
                    <Input placeholder='암호 메세지'
                        onKeyPress={entered}
                        {...register('secretMessage', {
                            required: '암호 메세지를 작성해주세요',
                        })}
                    />
                </Row>
                {errors.secretMessage && <ErrorMsg> {errors.secretMessage.message} </ErrorMsg>}
            </Column>
            <Button onClick={handleSubmit(onSubmit)}
                ref={findBtn}
            >
                비밀번호 찾기
            </Button>
        </Box>
    );
};
export default FindPWBox;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 600px;
    animation: ${zoomIn} .6s ease;
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