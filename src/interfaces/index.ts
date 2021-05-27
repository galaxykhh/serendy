import { Socket } from 'socket.io-client';

export type DisplayType = 'block' | 'none';
export type VisibilityType = 'visible' | 'hidden';
export type MyPageType = 'none' | true | false;

export interface IRecentChat {
    nickName: string;
    message: string;
    socketID: string;
};

export interface IComment {
    _id: string | undefined;
    nickName: string | undefined;
    content: string | undefined;
};

export interface ISendComment {
    _id: string | undefined;
    toAccount: string | undefined;
    nickName: string | null | undefined;
    content: string | undefined;
};

export interface ISendPost {
    account: string | null | undefined;
    nickName: string | null | undefined;
    content: string | undefined;
};

export interface ICurrentPost {
    _id: string | undefined;
    toAccount: string | undefined;
    nickName: string | undefined;
    fromAccount: string | undefined;
    content: string | undefined;
    comment: IComment | undefined;
};

export interface IMessageBox {
    nickName: string;
    message: string;
    socketID: boolean;
};

export interface IFindPW {
    account: string;
    secretMessage: string;
};

export interface INickName {
    nickName: string;
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
    nickName: string | null;
};

export interface IUserStore {
    user: IUser | null;
    userSocket: Socket | null;
    socketID: string | null;
};

export interface ISentView {
    currentSentPost: ICurrentPost | null;
};

export interface IReceivedView {
    currentReceivedPost: ICurrentPost | null;
    commentInput?: React.RefObject<HTMLTextAreaElement>;
    sendComment?: () => Promise<void>,
};

export interface IPostList {
    nickName: string;
    content: string;
    didReply?: boolean;
    showPost: () => void;
};

export interface IPostBox {
    sentPosts?: Array<any>;
    receivedPosts?: Array<any>;
    showPost: (_id: string) => void;
}

export interface IPostWindow {
    postSend: () => void;
    postArea: React.RefObject<HTMLTextAreaElement>;
};

export interface ICategories {
    setCategory: (boolean: boolean) => void;
    icon: any;
    text: string;
    boolean: boolean;
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