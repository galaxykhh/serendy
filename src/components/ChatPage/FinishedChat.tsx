import { observer } from "mobx-react";
import React from "react";
import chatStore from "../../store/chatStore";
import { BigAnnounce, Announce, BtnBox, StartBtn } from "./MatchHandler";

const FinishedChat: React.FC = observer(() => {
    return (
        <>
            <BigAnnounce> 대화가 종료되었어요 </BigAnnounce>
            <Announce size='18px' >상대방은 어떤 사람이었을까요?</Announce>
            <BtnBox>
                <StartBtn onClick={chatStore.reset} >다시하기</StartBtn>
            </BtnBox>
        </>
    );
});

export default FinishedChat;