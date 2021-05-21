import React from 'react';
import styled  from 'styled-components';
import { IPostWindow } from '../../interfaces/index';

const PostWindow: React.FC<IPostWindow>= ({ postSend, postArea }) => {

    return (
        <Row>
            <LetterContainer>
                <Letter>
                    <TextArea ref={postArea} />
                </Letter>
                <SendBtnBox>
                    <SendBtn onClick={postSend} >
                        편지 보내기
                    </SendBtn>
                </SendBtnBox>
            </LetterContainer>

            <RuleContainer>
                        <BigMent> 어떤 사람이 내 편지를 받게 될까요 ? </BigMent>
                        <br />
                        <Rule>
                            <Ment size='18px'> · 편지는 수신자를 정할 수 없고 무작위로 한 사람에게 전달돼요 </Ment>
                            <Ment size='18px'> · 누군가 편지를 받게되면 나에게 답장을 보낼 수 있어요 </Ment>
                            <Ment size='18px'> · 편지를 받으면 자동으로 보관함에 저장돼요 </Ment>
                            <Ment size='18px'> · 한 편지에 답장은 한 번만 가능해요 </Ment>
                        </Rule>
                        <br />
            </RuleContainer>
            
        </Row>
    );
};

export default PostWindow;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 1450px) {
        flex-direction: column;
    };
`;

const LetterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    height: 740px;
    @media only screen and (max-width: 1450px) {
        margin-right: 0px;
        height: 90%;
    };
`;

const Letter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 740px;
    height: 680px;
    min-width: 500px;
    border-radius: 10px;
    @media only screen and (max-width: 1450px) {
        width: 99%;
        height: 70%;
        min-width: 300px;
    };
`;

const TextArea = styled.textarea.attrs({
    placeholder: '여기서부터 이야기를 들려주세요',
})`
    outline-style: none;
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.colors.white10};
    width: 100%;
    height: 100%;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.white};
    padding: 60px;
    resize: none;
    border-radius: 10px;
    @media only screen and (max-width: 600px) {
        padding: 20px;
        font-size: 14px;
    };
`;

const SendBtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 740px;
    min-width: 500px;
    height: 50px;
    @media only screen and (max-width: 1450px) {
        width: 99%;
        min-width: 200px;
    };
`;

const SendBtn = styled.button`
    all: unset;
    width: 100%;
    height: 50px;
    font-size: 18px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.main60};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.plum};
        color: ${({ theme }) => theme.colors.black};
    };
    @media only screen and (max-width: 600px) {
        font-size: 17px;
    };
`;

const RuleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 300px;
    height: 740px;
    background-color: ${({ theme }) => theme.colors.main60};
    border-radius: 10px;
    @media only screen and (max-width: 1450px) {
        height: 70%;
    };
`;

const Rule = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Ment = styled.div<{
    size?: string
}>`
    font-size: 17px;
    margin-bottom: 10px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1520px) {
        font-size: 15px;
    };
    @media only screen and (max-width: 600px) {
        font-size: 11px;
    };
`;

const BigMent = styled(Ment)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1520px) {
        font-size: 25px;
    };
    @media only screen and (max-width: 600px) {
        font-size: 17px;
    };
`;