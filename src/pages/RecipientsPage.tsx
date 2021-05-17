import React from 'react';
import styled from 'styled-components';
import PostBox from '../components/RecipientsPage/PostBox';
import CenterView from '../components/publicComponents/CenterView';
import Container from '../components/publicComponents/Container';

const RecipientsPage: React.FC = () => {
    return (
        <Container>
            <CenterView>
                <Top> 받은 편지함 </Top>
                    <Row>
                        <PostBox />
                    </Row>
            </CenterView>
        </Container>
    )
}

export default RecipientsPage;

const Row = styled.div`
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Top = styled.div`
    min-width: 100%;
    min-height: 60px;
    max-height: 60px;
    line-height: 60px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.main60};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
`;