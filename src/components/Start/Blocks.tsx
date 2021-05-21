import React from 'react';
import styled from 'styled-components';
import { TEXTLOGO_URL } from '../../config';


const Blocks: React.FC<{push: () => void}>= ({push}) => {
    return (
        <BlockContainer>
            <Block title='말해보세요' >
                주변 사람들에게 선뜻 말하기 힘든 고민이 있다면 <br/><br/>
                낯선 누군가에게 부담 없이 말해보세요
            </Block>
            <Space />
            <Block title='들어보세요' >
                낯선 누군가의 고민거리를 들어보세요 <br/><br/>
                들어주는 것만으로 상대방에게 힘이 될지도 모릅니다
            </Block>
            <Space />
            <Block title='걱정마세요'>
                상대방과의 모든 대화는 익명입니다<br/><br/>
                서로 모르는 상대와 이야기에만 집중할 수 있습니다
            </Block>
            <Space />
            <Text data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='800'>
                경험해보세요 <br/><br/>
            </Text>
            <Space />
            <Text data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='800'>
                당신의 행운 또는 우연을 위한
            </Text>
            <Space />
            <Space />
            <TextLogo data-aos='fade-down-right'
                      data-aos-duration='1000'
                      data-aos-anchor-placement='bottom-bottom'
                      />
            <StartBtn data-aos='fade-in'
                      data-aos-duration='1000'
                      onClick={push}
                      >
                시작하기
            </StartBtn>
            <Space />
        </BlockContainer>
    );
};

export default Blocks;

const Block: React.FC<{ title: string }>= ({ children, title }) => {
    return (
        <>
            <Text data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='900'>
                {title}
            </Text>
            <SmallText data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='900'>
                {children}
            </SmallText>
        </>
    );
};

const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 3000px;
`;

const Text = styled.div<{ size?: string }>`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    min-height: 56px;
    margin-bottom: 50px;
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    };
`;

const SmallText = styled.div<{ size?: string }>`
    font-size: 28px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    min-height: 95px;
    margin-bottom: 50px;
    @media only screen and (max-width: 600px) {
        font-size: 18px;
    };
`;

const Space = styled.div`
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

