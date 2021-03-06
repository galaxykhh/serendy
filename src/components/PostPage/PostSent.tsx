import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { paperPlane, setTimeFade } from '../../style/keyframes';

const PostSent: React.FC<{ reset: () => void }>= ({ reset }) => {
    return (
        <>
            <Icon icon={faPaperPlane} />
            <Text>편지가 누군가에게 전달되었어요!</Text>
            <Button onClick={reset} >확인</Button>
        </>
    );
};

export default PostSent;

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${paperPlane} 2s ease forwards;
    @media only screen and (max-width: 600px) {
        font-size: 27px;
    };
`;

const Text = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
    animation: ${setTimeFade} 2s ease;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    };
`;

const Button = styled.button`
    all: unset;
    width: 200px;
    height: 65px;
    border-radius: 40px;
    margin-top: 30px;
    margin-bottom: 120px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    transition: .4s ease;
    animation: ${setTimeFade} 2s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.mainBlue};
    };
    @media only screen and (max-width: 600px) {
        width: 150px;
        height: 50px;
        font-size: 17px;
    };
`;