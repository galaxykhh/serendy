import { Socket } from 'socket.io-client';

export type DisplayType = 'block' | 'none';
export type VisibilityType = 'visible' | 'hidden';

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
    isLogging: boolean;
    isSignIn: boolean;
    user: IUser | null;
    userSocket: Socket | null;
    socketID: string | null;
};

export interface IReceivedView {
    currentSentPost: ICurrentPost | undefined
};

export interface ISentView {
    currentReceivedPost: ICurrentPost | undefined;
    commentArea: React.RefObject<HTMLTextAreaElement>;
    sendComment: () => Promise<void>,
};

export interface IPostList {
    nickName: string;
    content: string;
    didReply?: boolean;
    onClick: () => void;
};

export interface IPostBox {
    sentPosts?: Array<any>;
    receivedPosts?: Array<any>;
    onClick: (_id: string) => void;
}

export interface IPostWindow {
    postSend: () => void;
    postArea: React.RefObject<HTMLTextAreaElement>;
};