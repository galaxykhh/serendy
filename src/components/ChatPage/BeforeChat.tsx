import { observer } from "mobx-react";
import React from "react";
import chatStore from "../../store/chatStore";
import { BigMent, Rule, BtnBox, StartBtn } from "./MatchHandler";
import Ments from '../PublicComponents/Ments';

const beforeMent = [
    {
        id: 1,
        ment: '· 대화는 서로가 설정한 이름으로 진행돼요',
    },
    {
        id: 2,
        ment: '· 중간에 대화를 나가지 않으면 대화를 계속 할 수 있어요',
    },
    {
        id: 3,
        ment: '· 누군가 대화방을 나가게 되면 대화가 종료돼요',
    },
];

const BeforeChat: React.FC = observer(() => {
    return (
        <>
        <BigMent>상대를 찾고 대화를 시작하세요 !</BigMent>
        <Rule>
            {beforeMent.map(x => (
                <Ments ment={x.ment}
                    key={x.id}
                />
            ))}
        </Rule>
        <BtnBox>
            <StartBtn onClick={chatStore.handleSearch} >상대 찾기</StartBtn>
        </BtnBox>
        </>
    );
});

export default BeforeChat;