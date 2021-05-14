import React, { useEffect }  from 'react';
import styled, { Keyframes } from 'styled-components';
import { fadeIn, zoomIn, zoomOut } from '../../style/keyframes';
import Loader from 'react-loader-spinner';
import { theme } from '../../style/theme';
import { useChat } from '../../Hooks/useChat';
import { VisibilityType } from '../../type';
import { observer } from 'mobx-react';
import MessageBox from './MessageBox';
import userStore from '../../store/userStore';

const ChatWindow: React.FC = observer(() => {
    const chat = useChat();

    useEffect(() => {
        chat.handleReceive();
    }, []); // eslint-disable-line

    useEffect(() => {
        chat.handlePushChat();
        return () => {
            chat.setRecentChat({ nickName: '', message: '', socketID: '' });
        };
    }, [chat.recentChat.message]); // eslint-disable-line

    return (
        <Row>
            <ChatBox animation={chat.isMatched ? zoomIn : zoomOut}
                     visibility={chat.display}
                     >
                <Screen>
                    {chat.chatLog.map((data, index) => (
                        <MessageBox message={data.message}
                                       nickName={data.nickName}
                                       socketID={data.socketID === userStore.socketID}
                                       key={index}
                                    />
                    ))}
                </Screen>
                <SenderBox>
                    <Input ref={chat.input}
                           onKeyPress={chat.handleEnter}
                           />
                    <SendBtn ref={chat.sendBtn}
                             onClick={chat.handleSendMsg}
                             >
                        전송
                    </SendBtn>
                </SenderBox>
            </ChatBox>

            <HandlerContainer>
                {chat.isSearching ?
                    <>
                        <BigMent style={{ marginBottom: '30px' }} > 상대를 찾고 있습니다 </BigMent>
                        <Loader type="Circles" color={theme.colors.plum} height={60} width={60} />
                        <BtnBox>
                            <CancelBtn onClick={chat.handleSearch} > 취소하기 </CancelBtn>
                        </BtnBox>
                    </> :
                    <>
                        <BigMent> 상대를 찾고 대화를 시작하세요 ! </BigMent>
                        <br />
                        
                        <Rule>
                            <Ment size='18px'> · 채팅은 서로가 설정한 이름으로 진행돼요 </Ment>
                            <Ment size='18px'> · 상대와 대화가 통하면 쪽지 요청을 보낼 수 있어요 </Ment>
                            <Ment size='18px'> · 요청이 수락되면 채팅이 끝나도 쪽지를 보낼 수 있어요 </Ment>
                            <Ment size='18px'> · 누군가 채팅방을 나가게되면 채팅은 종료돼요 </Ment>
                        </Rule>
                        <br />
                        <BtnBox>
                            <StartBtn onClick={chat.handleSearch} > 상대 찾기 </StartBtn>
                        </BtnBox>
                    </>}
            </HandlerContainer>
            
        </Row>
    );
});

export default ChatWindow;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 1450px) {
        flex-direction: column;
    }
`;

const ChatBox = styled.div<{
    animation: Keyframes,
    visibility: VisibilityType,
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    width: 100%;
    height: 740px;
    min-height: 740px;
    visibility: ${({ visibility }) => visibility};
    animation: ${({ animation }) => animation} .7s ease forwards;
    @media only screen and (max-width: 1450px) {
        margin-right: 0px;
        min-height: 340px;
    }
`;

const Screen = styled.div`
    width: 740px;
    height: 680px;
    max-height: 680px;
    background-color: ${({ theme }) => theme.colors.white20};
    border-radius: 10px;
    overflow: auto;
    @media only screen and (max-width: 1450px) {
        width: 99%;
        height: 70%;
        min-width: 300px;
    };
`;

const SenderBox = styled.div`
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

const Input = styled.input.attrs(({
    type: 'text',
    placeholder: '내용을 입력해주세요',
    autocomplete: 'off',
}))`
    all: unset;
    width: 84%;
    min-height: 50px;
    padding-left: 30px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white20};
    border-radius: 10px;
    @media only screen and (max-width: 400px) {
        width: 99%;
    }
`;

const SendBtn = styled.button`
    all: unset;
    width: 10%;
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
    @media only screen and (max-width: 1450px) {
        font-size: 15px;
        width: 10%;
    }
`;

const HandlerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 300px;
    height: 740px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.main60};
    animation: ${fadeIn} .8s ease;
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

const Ment = styled.div<{ size?: string }>`
    font-size: 17px;
    margin-bottom: 10px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1520px) {
        font-size: 15px;
    }
`;

const BigMent = styled(Ment)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1520px) {
        font-size: 25px;
    }
`;

const StartBtn = styled(SendBtn)`
    width: 150px;
    height: 70px;
    font-size: 20px;
    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
    @media only screen and (max-width: 1450px) {
        width: 100px;
        height: 50px;
        font-size: 17px;
        margin-top: 15px;
    }
`;

const CancelBtn = styled(StartBtn)`
    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
    }
`;

const BtnBox = styled.div`
    position: absolute;
    bottom: 70px;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1450px) {
        bottom: -60px;
    }
`;