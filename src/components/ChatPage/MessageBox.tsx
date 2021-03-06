import React from 'react';
import styled from 'styled-components';
import { IMessageBox } from '../../interfaces';

const MessageBox: React.FC<IMessageBox>= ({ nickname, message, socketID }) => {
    return (
        <Container fd={socketID ? 'row-reverse' : 'row'} >
            {socketID ?  
                <OwnChatName> { nickname } </OwnChatName> :
                <OthersName> { nickname }</OthersName>
            }
            {socketID ? 
                <OwnBalloon>
                    <RightTail />
                    {message}
                </OwnBalloon> :
                <OthersBalloon>
                    <LeftTail />
                    {message}
                </OthersBalloon>
            }
        </Container>
    );
};

export default MessageBox;

const Container = styled.div<{ fd: string }>`
    position: relative;
    display: flex;
    flex-direction: ${({ fd }) => fd};
    width: 100%;
    min-height: 60px;
    margin-bottom: 10px;
    @media only screen and (max-width: 600px) {
        min-height: 40px;
        margin-bottom: 5px;
    };
`;

const OthersBalloon = styled.div`
    position: relative;
    min-width: 60px;
    max-width: 340px;
    padding: 20px;
    margin-top: 29px;
    margin-right: 10px;
    left: 25px;
    min-height: 50px;
    word-break: break-all;
	background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: 17px;
	border-radius: 15px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        max-width: 200px;
    };
`;

const OwnBalloon = styled.div`
    position: relative;
    min-width: 60px;
    max-width: 340px;
    padding: 20px;
    margin-top: 29px;
    margin-right: 10px;
    right: 20px;
    min-height: 50px;
    word-break: break-all;
	background: ${({ theme }) => theme.colors.main60};
    color: ${({ theme }) => theme.colors.white};
    font-size: 17px;
	border-radius: 15px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        max-width: 200px;
    };
`;

const LeftTail = styled.div`
    position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 18px solid transparent;
	border-right-color: ${({ theme }) => theme.colors.white};
	border-left: 0;
	border-top: 0;
	margin-top: -15px;
	margin-left: -18px;
`;

const RightTail = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 18px solid transparent;
	border-left-color: ${({ theme }) => theme.colors.main60};
	border-right: 0;
	border-top: 0;
	margin-top: -15px;
	margin-right: -18px;
`;

const OwnChatName = styled.div`
    position: absolute;
    font-size: 14px;
    max-width: 100px;
    position: absolute;
    color: ${({ theme }) => theme.colors.white};
    right: 35px;
    top: 10px;
`;

const OthersName = styled.div`
    position: absolute;
    font-size: 14px;
    max-width: 100px;
    color: ${({ theme }) => theme.colors.white};
    left: 30px;
    top: 10px;
`;