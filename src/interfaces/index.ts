import { SubmitHandler } from 'react-hook-form';
import { Socket } from 'socket.io-client';

export type DisplayType = 'block' | 'none';
export type VisibilityType = 'visible' | 'hidden';
export type MyPageType = 'none' | 'changeName' | 'changePW';
type WhatPageType = 'sender' | 'recipients';

export interface IRecentChat {
    nickname: string;
    message: string;
    socketID: string;
};

export interface IComment {
    _id: string | undefined;
    nickname: string | undefined;
    content: string | undefined;
};

export interface ISendComment {
    _id: string | undefined;
    toAccount: string | undefined;
    nickname: string | null | undefined;
    content: string | undefined;
};

export interface ISendPost {
    account: string | null | undefined;
    nickname: string | null | undefined;
    content: string | undefined;
};

export interface ICurrentPost {
    _id: string | undefined;
    toAccount: string | undefined;
    nickname: string | undefined;
    fromAccount: string | undefined;
    content: string | undefined;
    comment: IComment | undefined;
};

export interface IMessageBox {
    nickname: string;
    message: string;
    socketID: boolean;
};

export interface IFindPWBox {
    onSubmit: SubmitHandler<IFindPW>;
};

export interface IFindPW {
    account: string;
    secretMessage: string;
};

export interface ISignInBox {
    onSubmit: SubmitHandler<ISignInData>;
    pushSignUp: () => void;
    pushFindPW: () => void;
};

export interface INickName {
    nickname: string;
};

export interface IPassword {
    password: string;
    passwordCheck: string;
};

export interface ISignInData {
    account: string;
    password: string;
};

export interface ISignUpData {
    account: string;
    password: string;
    check: string;
    secretMessage: string;
};

export interface IUser {
    account: string | null;
    nickname: string | null;
};

export interface IUserStore {
    user: IUser | null;
    userSocket: Socket | null;
    socketID: string | null;
};

export interface IView {
    post: ICurrentPost | null;
    whatPage?: WhatPageType;
    commentInput?: React.RefObject<HTMLTextAreaElement>;
    sendComment?: () => void,
};

export interface IPost {
    nickname: string | undefined;
    content: string | undefined;
    replied: boolean;
    whatPage: WhatPageType;
    showPost: () => void;
};

export interface IPostBox {
    posts: ICurrentPost[];
    whatPage: WhatPageType;
    showPost: (_id: string) => void;
};

export interface IPostWindow {
    postSend: () => void;
    postArea: React.RefObject<HTMLTextAreaElement>;
};

export interface ICategories {
    setSelectedCategory: (category: MyPageType) => void;
    icon: any;
    text: string;
    category: MyPageType;
};

export interface ICategoryList {
    id: number;
    icon: any;
    category: MyPageType;
    text: string;
};

export interface IMatchHandler {
    isSearching: boolean;
    isMatched: boolean;
    isFinished: boolean;
};

export interface IBox {
    item: {
        // push: () => void;
        color: string;
        icon: any;
        text: string;
        push: () => void;
    };
};

export interface IMenu {
    item: {
        onClick: () => void;
        icon: any;
        text: string;
    };
};

export interface IBigBlock {
    item: {
        title: string;
        subtitle: string;
    };
};