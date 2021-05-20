import { faPen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userStore from '../../store/userStore';
import { useHistorys } from '../../Hooks/useHistorys';
import { INickName } from '../../interfaces/index';

const ChangeNameBox: React.FC = () => {

    const history = useHistorys();

    const { register, handleSubmit, formState: { errors } } = useForm<INickName>();

    const onSubmit: SubmitHandler<INickName> = (nickName) => {
        const userData = {
            account: userStore.user?.account,
            ...nickName,
        };
        userStore.changeName(userData, history.pushLogin);
    };

    return (
        <Container>
            <Column>
                <Text> 변경할 닉네임을 입력해주세요 </Text>
                <Text style={{ color: 'plum', fontSize: '16px' }} > (닉네임은 중복이 가능합니다) </Text>
                <InputBox>
                    <Icon icon={faPen} />
                    <Input {...register('nickName', {
                        required: '변경할 닉네임을 입력해주세요',
                        pattern: { value: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/, message: '닉네임에 적합한 문자가 아닙니다'},
                        minLength: { value: 2, message: '닉네임이 너무 짧아요' },
                        maxLength: { value: 19, message: '닉네임이 너무 길어요' },
                    })} />
                </InputBox>
                <TextBox>
                    {errors.nickName && <ErrorMsg> {errors.nickName.message} </ErrorMsg>}
                </TextBox>
                <Button onClick={handleSubmit(onSubmit)} > 변경하기 </Button>
            </Column>
        </Container>
    );
};

export default ChangeNameBox;

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

const Input = styled.input.attrs({
    placeholder: '변경할 닉네임'
})`
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
    margin-top: 30px;
    transform: translateY(-5px);
    color: ${({ theme }) => theme.colors.white};
`;

const ErrorMsg = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.red};
`;