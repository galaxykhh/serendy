import { observer } from "mobx-react";
import React from "react";
import chatStore from "../../store/chatStore";
import { BigMent, Rule, Ment, BtnBox, StartBtn } from "./MatchHandler";

const BeforeChat: React.FC = observer(() => {
    return (
        <>
        <BigMent> 상대를 찾고 대화를 시작하세요 ! </BigMent>
        <br />
        <Rule>
            <Ment size='18px'> · 대화는 서로가 설정한 이름으로 진행돼요 </Ment>
            <Ment size='18px'> · 중간에 대화를 나가지 않으면 대화를 계속 할 수 있어요 </Ment>
            <Ment size='18px'> · 누군가 대화방을 나가게 되면 대화가 종료돼요 </Ment>
        </Rule>
        <br />
        <BtnBox>
            <StartBtn onClick={chatStore.handleSearch} > 상대 찾기 </StartBtn>
        </BtnBox>
        </>
    );
});

export default BeforeChat;