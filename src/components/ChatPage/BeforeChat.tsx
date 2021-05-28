import { observer } from "mobx-react";
import React from "react";
import chatStore from "../../store/chatStore";
import { BigAnnounce, Rule, BtnBox, StartBtn } from "./MatchHandler";
import Announce from '../PublicComponents/Announce';

const beforeAnnounce = [
    {
        id: 1,
        announce: '· 대화는 서로가 설정한 이름으로 진행돼요',
    },
    {
        id: 2,
        announce: '· 중간에 대화를 나가지 않으면 대화를 계속 할 수 있어요',
    },
    {
        id: 3,
        announce: '· 누군가 대화방을 나가게 되면 대화가 종료돼요',
    },
];

const BeforeChat: React.FC = observer(() => {
    return (
        <>
        <BigAnnounce>상대를 찾고 대화를 시작하세요 !</BigAnnounce>
        <Rule>
            {beforeAnnounce.map(x => (
                <Announce announce={x.announce}
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