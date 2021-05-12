import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const PostSent: React.FC = () => {
    return (
        <Icon icon={faPaperPlane} />
    )
}

export default PostSent;

const Icon = styled(FontAwesomeIcon)`
    font-size: 35px;
`;