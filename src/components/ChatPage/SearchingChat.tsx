import React from "react";
import { observer } from "mobx-react";
import Loader from "react-loader-spinner";
import chatStore from "../../store/chatStore";
import { theme } from "../../style/theme";
import { BigMent, BtnBox, CancelBtn } from "./MatchHandler";

const SearchingChat: React.FC = observer(() => {
    return (
        <>
        <BigMent style={{ marginBottom: '30px' }} >상대를 찾고 있어요</BigMent>
        <Loader type="Circles" color={theme.colors.plum} height='40px' width='40px' />
        <BtnBox>
            <CancelBtn onClick={chatStore.handleSearch} >취소하기</CancelBtn>
        </BtnBox>
        </>
    );
});

export default SearchingChat;
