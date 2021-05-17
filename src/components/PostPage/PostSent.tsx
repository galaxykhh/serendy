import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { paperPlane, setTimeFade } from '../../style/keyframes';

const PostSent: React.FC = () => {
    return (
        <>
            <Icon icon={faPaperPlane} />
            <Text> 편지가 누군가에게 전달되었어요! </Text>
        </>
    )
}

export default PostSent;

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${paperPlane} 2s ease forwards;
`;

const Text = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
    margin-bottom: 140px;
    animation: ${setTimeFade} 2s ease;
`;