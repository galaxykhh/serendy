import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../style/theme';

const Test = [
    {
        id: 1,
        messageContent: '안녕하세요',
        stranger: '외로운사람1',
    },
    {
        id: 2,
        messageContent: '긴글자가제대로가려지는지테스트하는방인데너무짧다',
        stranger: '외로운사람2'
    },
    {
        id: 3,
        messageContent: '뭐하세요',
        stranger: '외로운사람3',
    },
    {
        id: 4,
        messageContent: '긴글자가잘나오는지테스트하는겸써보는중인데잘될지모르겠다아아아아아',
        stranger: '외로운사람4',
    },
    {
        id: 5,
        messageContent: '긴글자가잘나오는지테스트하는겸써보는중인데잘될지모르겠다아아아아아',
        stranger: '외로운사람5',
    },
    {
        id: 6,
        messageContent: '고민을 들어주세요',
        stranger: '외로운사람6',
    },
    {
        id: 8,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 7,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 9,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 10,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 11,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 12,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 13,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 14,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 15,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
]

const MessageList: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleStorage = ():void => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Container height={isOpen ? '68%' : '80px'} >
                <StorageHandler onClick={handleStorage}
                                bgcolor={isOpen ? theme.colors.main60 : theme.colors.black}
                                >
                    <IconBox>
                        <StorageIcon icon={isOpen ? faFolderOpen : faFolder} />
                    </IconBox>
                    <Text> 편지 보관함 </Text>
                </StorageHandler>
                <MessageContainer>
                    {Test.map((item, index) => (
                        <Message item={item} key={index} />
                    ))}
                </MessageContainer>
            </Container>
        </>
    )
}

export default MessageList;

type HeightType = '68%' | '80px';

const Container = styled.div<{
    height: HeightType
}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: ${({ height }) => height};
    min-height: 80px;
    min-width: 80px;
    border-radius: 10px;
    overflow: hidden;
    transition: .6s ease;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 80px;
    margin-bottom: 8px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: ${({ theme }) => theme.colors.main60};
    overflow: auto;
`;

const StorageHandler = styled.div<{
    bgcolor: string
}>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 80px;
    cursor: pointer;
    transition: .3s ease;
    background-color: ${({ bgcolor }) => bgcolor};
    &:hover {
        background-color: ${({ theme }) => theme.colors.main60};
    }
`;

const IconBox = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 30px;
`;

const StorageIcon = styled(FontAwesomeIcon)`
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 35px;
`;

const Text = styled.div<{
    size?: string
}>`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-width: 880px) {
        display: none;
    }
`;