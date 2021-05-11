import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faDoorOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import authStore from '../../store/authStore';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Row>
                <Icon icon={faUserAlt} iconSize='24px' />
                <Text ml='7px' size='16px' > {authStore.user} </Text>
            </Row>
            <Row>
                <Box>
                    <Icon icon={faClipboard} iconSize='24px' />
                    <Text mt='8px' size='14px' > 내정보 </Text>
                </Box>
                <Box>
                    <Icon icon={faDoorOpen} iconSize='24px' />
                    <Text mt='8px' size='14px' > 로그아웃 </Text>
                </Box>                
            </Row>
        </Container>
    )
}

export default UserInfo;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 20%;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black10};
`;

const Icon = styled(FontAwesomeIcon)<{ iconSize: string }>`
    font-size: ${({ iconSize }) => iconSize};
`;

const Text = styled.span<{ 
    size?: string;
    color?: string;
    ml?: string;
    mt?: string;
}>`
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};
    margin-left: ${({ ml }) => ml};
    margin-top: ${({ mt }) => mt};
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 10px;
    transition: .3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white20};
    }
`;