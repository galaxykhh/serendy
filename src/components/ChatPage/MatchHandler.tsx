import React from 'react'
import styled from 'styled-components'
import BeforeChat from './BeforeChat';
import FinishedChat from './FinishedChat';
import MatchedChat from './MatchedChat';
import SearchingChat from './SearchingChat';

interface IMatchHandler {
    isSearching: boolean;
    isMatched: boolean;
    isFinished: boolean;
};

const MatchHandler: React.FC<IMatchHandler> = ({ isSearching, isMatched, isFinished }) => {
    if (!isSearching && !isMatched && !isFinished) return <BeforeChat />
    if (isSearching && !isMatched && !isFinished) return <SearchingChat />
    if (isSearching && isMatched && !isFinished) return <MatchedChat />
    if (isSearching && isMatched && isFinished) return <FinishedChat />
    return null;
};

export default MatchHandler;

export const Rule = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Ment = styled.div<{ size?: string }>`
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

export const BigMent = styled(Ment)`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 1520px) {
        font-size: 25px;
    };
    @media only screen and (max-width: 600px) {
        font-size: 17px;
    };
`;

export const StartBtn = styled.button`
    all: unset;
    width: 150px;
    height: 70px;
    font-size: 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.main60};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        color: ${({ theme }) => theme.colors.black};
    };
    @media only screen and (max-width: 1450px) {
        width: 100px;
        height: 40px;
        font-size: 17px;
        margin-top: 15px;
    };
    @media only screen and (max-width: 600px) {
        width: 90px;
        height: 25px;
        font-size: 13px;
    };
`;

export const CancelBtn = styled.button`
    all: unset;
    width: 150px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.main60};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .3s ease;
    @media only screen and (max-width: 1450px) {
        width: 100px;
        height: 40px;
        font-size: 17px;
        margin-top: 15px;
    };
    @media only screen and (max-width: 600px) {
        width: 90px;
        height: 25px;
        font-size: 13px;
    };
    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
    };
`;

export const BtnBox = styled.div`
    position: absolute;
    bottom: 70px;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1450px) {
        bottom: 10px;
    };
    @media only screen and (max-width: 600px) {
        bottom: 0px;
    };
`;