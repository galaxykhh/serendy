import React from 'react';
import styled from 'styled-components';

const Manual: React.FC = () => {

    return (
        <FlexBox>
            <div style={{ fontSize: '40px' }} > 여기다가 대충 설명 해줌 </div>
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