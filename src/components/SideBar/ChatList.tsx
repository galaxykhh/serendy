import React from 'react';
import styled from 'styled-components';
import ChatRoom from './ChatRoom';

const Test = [
    {
        id: 1,
        title: '대화방1',
    },
    {
        id: 2,
        title: '긴글자가제대로가려지는지테스트하는방'
    },
    {
        id: 3,
        title: '대화방3',
    },
    {
        id: 4,
        title: '긴글자가제대로가려지는지테스트하는방'
    },
    {
        id: 5,
        title: '긴글자가제대로가려지는지테스트하는방'
    },
    {
        id: 6,
        title: '대화방6'
    },
    {
        id: 7,
        title: '대화방7'
    },
    {
        id: 8,
        title: '대화방8'
    },
    {
        id: 9,
        title: '대화방9'
    },
    {
        id: 10,
        title: '긴글자가제대로가려지는지테스트하는방'
    },
    {
        id: 11,
        title: '긴글자가제대로가려지는지테스트하는방'
    },
]

const ChatList: React.FC = () => {
    return (
        <Container>
            {Test.map((x, i) => (
                <ChatRoom roomTitle={x.title} key={i} />
            ))}
        </Container>
    )
}

export default ChatList;

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