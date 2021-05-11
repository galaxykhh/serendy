import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faDoorOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import authStore from '../../store/authStore';
import { observer } from 'mobx-react';

const UserInfo: React.FC = observer(() => {

    return (
        <Container>
            <Row>
                <Icon icon={faUserAlt} iconsize='24px' />
                <Text ml='7px' size='16px' > {authStore.user} </Text>
            </Row>
            <Row>
                <Box>
                    <Icon icon={faClipboard} iconsize='24px' />
                    <Text mt='8px' size='14px' > 내 정보 </Text>
                </Box>
                <Box onClick={() => authStore.signOut()} >
                    <Icon icon={faDoorOpen} iconsize='24px' />
                    <Text mt='8px' size='14px' > 로그아웃 </Text>
                </Box>                
            </Row>
        </Container>
    );
});

export default UserInfo;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

const Icon = styled(FontAwesomeIcon)<{ iconsize: string }>`
    font-size: ${({ iconsize }) => iconsize};
    color: ${({ theme }) => theme.colors.black};
`;

const Text = styled.span<{ 
    size?: string;
    color?: string;
    ml?: string;
    mt?: string;
}>`
    font-size: ${({ size }) => size};
    color: ${({ theme }) => theme.colors.black};
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
    margin: 5px;
    transition: .3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white50};
    }
`;