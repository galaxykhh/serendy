import React from 'react';
import styled  from 'styled-components';
import { fadeIn } from '../../style/keyframes';

interface IPostWindow {
    postSend: () => void;
    textArea: React.RefObject<HTMLTextAreaElement>;
}

const PostWindow: React.FC<IPostWindow>= ({ postSend, textArea }) => {

    return (
        <Row>
            <LetterContainer>
                <Letter>
                    <TextArea ref={textArea}
                              onChange={() => console.log('change')}
                              />
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
                            <Ment size='18px'> · 편지를 받은 사람은 답장을 한 번만 할 수 있어요 </Ment>
                            <Ment size='18px'> · 편지를 받으면 자동으로 보관함에 저장돼요 </Ment>
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
    animation: ${fadeIn} .8s ease;
    @media only screen and (max-width: 1450px) {
        flex-direction: column;
    }
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
    }
`;

const Letter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 740px;
    height: 680px;
    min-width: 500px;
    background-color: ${({ theme }) => theme.colors.white20};
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
    all: unset;
    width: 80%;
    height: 80%;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.white};
    padding: 60px;
    border-radius: 30px;
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
    }
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
    }
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
    }
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
    font-size: 18px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1520px) {
        font-size: 15px;
    }
`;

const BigMent = styled(Ment)`
    font-size: 30px;
    @media only screen and (max-width: 1520px) {
        font-size: 25px;
    }
`;