import React from 'react';
import styled from 'styled-components';

const logoURL = '/images/serendy_text.png';

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
                서로를 모르는 상대와 이야기에만 집중할 수 있습니다
            </Block>
            <Space />
            <Text size='50px'
                  data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='500'>
                경험해보세요 <br/><br/>
            </Text>
            <Space />
            <Text data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='500'>
                당신의 행운 또는 우연을 위한
            </Text>
            <Space />
            <Space />
            <TextLogo URL={logoURL}
                      data-aos='fade-down-right'
                      data-aos-duration='1000'
                      data-aos-anchor-placement='bottom-bottom'
                      />
            <StartBtn onClick={push}
                      data-aos='fade-in'
                      data-aos-duration='1000'
                      >
                시작하기
            </StartBtn>
            <Space />
            <Space />
        </BlockContainer>
    )
}

export default Blocks;

const Block: React.FC<{ title: string }>= ({ children, title }) => {
    return (
        <>
            <Text data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='900'>
                {title}
            </Text>
            <Text size='28px'
                  data-aos='fade-up'
                  data-aos-anchor-placement='center-center'
                  data-aos-duration='900'>
                {children}
            </Text>
        </>
    );
}

const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 3000px;
`;

const Text = styled.div<{ size?: string, mb?: string }>`
    font-size: ${({ size }) => size || '50px'};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${({ mb }) => mb};
    text-align: center;
    margin-bottom: 50px;
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
`;

const TextLogo = styled.div<{ URL: string }>`
    width: 800px;
    height: 300px;
    background-image: url(${({ URL }) => URL});
    background-size: cover;
    background-position: center;
`;

