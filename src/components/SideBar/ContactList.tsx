import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Test = [
    {
        id: 1,
        messageContent: '안녕하세요',
        stranger: '외로운사람1',
    },
    {
        id: 2,
        messageContent: '긴글자가제대로가려지는지테스트하는방',
        stranger: '외로운사람2'
    },
    {
        id: 3,
        messageContent: '뭐하세요',
        stranger: '외로운사람3',
    },
    {
        id: 4,
        messageContent: '긴글자가제대로가려지는지테스트하는방',
        stranger: '외로운사람4',
    },
    {
        id: 5,
        messageContent: '긴글자가제대로가려지는지테스트하는방',
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
        messageContent: '긴글자가제대로가려지는지테스트하는방',
        stranger: '긴글자맨',
    },
    {
        id: 11,
        messageContent: '긴글자가제대로가려지는지테스트하는방',
        stranger: '긴글자맨2',
    },
]

const ContactList: React.FC = () => {
    return (
        <Container>
            {Test.map((item, index) => (
                <Message item={item} key={index} />
            ))}
        </Container>
    )
}

export default ContactList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 64%;
    border-radius: 30px;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.black10};
`;