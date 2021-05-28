import React from "react";
import { observer } from "mobx-react";
import chatStore from "../../store/chatStore";
import { BigAnnounce, Announce, BtnBox, CancelBtn } from "./MatchHandler";

const MatchedChat: React.FC = observer(() => {
    return (
        <>
            <BigAnnounce> 상대와 연결되었어요 </BigAnnounce>
            <Announce size='18px'>먼저 인사 해보시는 건 어떠세요?</Announce>
            <BtnBox>
                <CancelBtn onClick={chatStore.stopChat}>대화방 나가기</CancelBtn>
            </BtnBox>
        </>
    );
});

export default MatchedChat;