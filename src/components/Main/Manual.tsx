import React from 'react';
import styled from 'styled-components';

const Manual: React.FC = () => {

    return (
        <FlexBox>
            여기다가 설명 해줌
        </FlexBox>

    )
}

export default Manual;

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;