import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faDoorOpen, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { DisplayType } from '../../../interfaces/index';
import { usePush } from '../../../hook/usePush';
import userStore from '../../../store/userStore';
import Menu from './Menu';

const UserInfo: React.FC = observer(() => {
    const start = usePush();
    const mypage = usePush('mypage');

    const signOut = () => {
        const isSuccess = userStore.signOut();
        if (isSuccess) start.push();
    };
    
    const menus = [
        {
            id: 1,
            onClick: mypage.push,
            icon: faClipboard,
            text: '정보변경',    
        },
        {
            id: 2,
            onClick: signOut,
            icon: faDoorOpen,
            text: '로그아웃',
        },
    ];

    return (
        <Container>
            <Row style={{ marginTop: '10px' }} >
                <UserIcon 
                    icon={faUserAlt}
                    iconsize='24px'
                />
                <Text
                    ml='7px'
                    size='16px'
                >
                    {userStore.user?.nickName}
                </Text>
            </Row>
            <Row>
                {menus.map(item => (
                    <Menu
                        item={item}
                        key={item.id}
                    />
                ))}
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
        'a'
        'b';
    };
    @media only screen and (max-width: 600px) {
        margin-top: 8px;
    };
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 15%;
    min-width: 40px;
    min-height: 120px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
        margin-top: 50px;
    };
`;

export const Icon = styled(FontAwesomeIcon)<{ iconsize: string, visible?: DisplayType }>`
    font-size: ${({ iconsize }) => iconsize};
    color: ${({ theme }) => theme.colors.white};
    display: ${({ visible }) => visible};
`;

const UserIcon = styled(Icon)`
`;

interface IText {
    size?: string;
    color?: string;
    ml?: string;
    mt?: string;
};

export const Text = styled.span<IText>`
    font-size: ${({ size }) => size};
    color: ${({ theme }) => theme.colors.white};
    margin-left: ${({ ml }) => ml};
    margin-top: ${({ mt }) => mt};
    white-space: nowrap;
    @media only screen and (max-width: 1450px) {
        display: none;
    };
`;