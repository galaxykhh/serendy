import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faDoorOpen, faQuestion, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import authStore from '../../store/authStore';
import { observer } from 'mobx-react';
import { DisplayType } from '../../config';
import { useHistorys } from '../../Hooks/useHistorys';

const UserInfo: React.FC = observer(() => {

    const history = useHistorys();

    return (
        <Container>
            <Row style={{ marginTop: '10px' }} >
                <UserIcon icon={faUserAlt} iconsize='24px' />
                <Text ml='7px' size='16px' > {authStore.user} </Text>
            </Row>
            <Row>
                <Box onClick={history.pushMyPage} >
                    <Icon icon={faClipboard} iconsize='24px' />
                    <Text mt='8px' size='14px' > 내 정보 </Text>
                </Box>
                <Box>
                    <Icon icon={faQuestion} iconsize='24px' />
                    <Text mt='8px' size='14px' > 뭐로할까 </Text>
                </Box>
                <Box>
                    <Icon icon={faQuestion} iconsize='24px' />
                    <Text mt='8px' size='14px' > 뭐로할까 </Text>
                </Box>
                <Box onClick={() => authStore.signOut(history.pushStart)} >
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
    @media only screen and (max-width: 1450px) {
        display: grid;
        grid-template-areas:
        'a b'
        'c d';
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 15%;
    min-width: 80px;
    min-height: 120px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black20};
`;

const Icon = styled(FontAwesomeIcon)<{
    iconsize: string
    visible?: DisplayType;
}>`
    font-size: ${({ iconsize }) => iconsize};
    color: ${({ theme }) => theme.colors.black};
    display: ${({ visible }) => visible};
`;

const UserIcon = styled(Icon)`
    @media only screen and (max-width: 1450px) {
         
    }
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
    white-space: nowrap;
    @media only screen and (max-width: 1450px) {
        display: none;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    min-width: 60px;
    padding: 5px;
    margin: 5px;
    transition: .3s ease;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white50};
    }
    @media only screen and (max-width: 720px) {
        min-width: 20px;
    }
`;