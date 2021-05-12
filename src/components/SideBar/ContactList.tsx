import React, { useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

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
        id: 7,
        messageContent: '후..',
        stranger: '외로운사람7',
    },
    {
        id: 8,
        messageContent: '반갑습니다',
        stranger: '외로운사람8',
    },
    {
        id: 9,
        messageContent: '뭐하시나요',
        stranger: '외로운사람9',
    },
    {
        id: 10,
        messageContent: '긴글자가잘나오는지테스트하는겸써보는중인데잘될지모르겠다아아아아아',
        stranger: '긴글자맨',
    },
    {
        id: 11,
        messageContent: '긴글자가잘나오는지테스트하는겸써보는중인데잘될지모르겠다아아아아아',
        stranger: '긴글자맨2',
    },
]

const ContactList: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleStorage = ():void => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Container height={isOpen ? '68%' : '80px'} >
            <StorageHandler onClick={handleStorage} >
                <StorageIcon icon={faInbox} />
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

export default ContactList;

type HeightType = '68%' | '80px';

const Container = styled.div<{ height: HeightType }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: ${({ height }) => height};
    min-width: 80px;
    border-radius: 30px;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.black20};
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
    overflow: auto;
`;

const StorageHandler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80px;
    cursor: pointer;
    transition: .3s ease;
    border-radius: 30px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.white50};
    }
`;

const StorageIcon = styled(FontAwesomeIcon)`
    font-size: 50px;
    text-align: center;
`;