import React from 'react';
import { Text, Space } from './Announces';

const SmallBlock: React.FC<{ text: string }>= ({ text }) => {
    return (
        <>
            <Text
                data-aos='fade-up'
                data-aos-anchor-placement='center-center'
                data-aos-duration='800'
            >
                {text}
            </Text>
            <Space />
        </>
    );
};

export default SmallBlock;
