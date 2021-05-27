import React from 'react';
import styled from 'styled-components';
import { TEXTLOGO_URL } from '../../config';
import BigBlock from './BigBlock';
import SmallBlock from './SmallBlock';

const bigBlockMent = [
    {   
        title: '말해보세요',
        subtitle: `주변 사람들에게 선뜻 말하기 힘든 고민이 있다면\n\n낯선 누군가에게 부담 없이 말해보세요`,
    },
    {   
        title: '들어보세요',
        subtitle: `낯선 누군가의 고민거리를 들어보세요\n\n들어주는 것만으로 상대방에게 힘이 될지도 몰라요`,
    },
    {   
        title: '걱정마세요',
        subtitle: `상대방과의 모든 대화는 익명입니다\n\n서로를 모르는 상대화 이야기에만 집중해보세요`,
    },
];

const smallBlockMent = [
    {
        text: '경험해보세요',
    },
    {
        text: '당신의 행운 또는 우연을 위한',
    },
];

const Layout: React.FC<{push: () => void}>= ({push}) => {
    return (
        <BlockContainer>
            {bigBlockMent.map(item => (
                <BigBlock
                    item={item}
                    key={item.title}
                />
            ))}
            {smallBlockMent.map(item => (
                <SmallBlock
                    text={item.text}
                    key={item.text}
                />
            ))}
            <Space />
            <TextLogo
                data-aos='fade-down-right'
                data-aos-duration='1000'
                data-aos-anchor-placement='bottom-bottom'
            />
            <StartBtn
                data-aos='fade-in'
                data-aos-duration='1000'
                onClick={push}
            >
                시작하기
            </StartBtn>
            <Space />
        </BlockContainer>
    );
};

export default Layout;

const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Text = styled.div<{ size?: string }>`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    };
`;

export const Space = styled.div`
    width: 400px;
    height: 250px;
`;

const StartBtn = styled.button`
    all: unset;
    width: 200px;
    height: 100px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        width: 120px;
        height: 60px;
        font-size: 17px;
    };
`;

const TextLogo = styled.div`
    width: 800px;
    height: 300px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    background-position: center;
    @media only screen and (max-width: 600px) {
        width: 600px;
        height: 100px;
    };
`;

