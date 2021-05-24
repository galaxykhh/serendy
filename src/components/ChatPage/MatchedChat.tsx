import React from "react";
import { observer } from "mobx-react";
import chatStore from "../../store/chatStore";
import { BigMent, Ment, BtnBox, CancelBtn } from "./MatchHandler";

const MatchedChat: React.FC = observer(() => {
    return (
        <>
            <BigMent> 상대와 연결되었어요 </BigMent>
            <br />
            <br />
            <Ment size='18px'> 먼저 인사 해보시는 건 어떠세요? </Ment>
            <br />
            <br />
            <br />
            <BtnBox>
                <CancelBtn onClick={chatStore.stopChat}> 대화방 나가기 </CancelBtn>
            </BtnBox>
        </>
    );
});

export default MatchedChat;