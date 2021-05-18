import React from 'react';
import styled from 'styled-components';
import PostBox from '../components/RecipientsPage/PostBox';
import CenterView from '../components/publicComponents/CenterView';
import Container from '../components/publicComponents/Container';

const RecipientsPage: React.FC = () => {
    return (
        <Container>
            <CenterView>
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