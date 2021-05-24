import React, { useRef, useState } from 'react'
import { observer } from 'mobx-react';
import CenterView from '../components/publicComponents/CenterView'
import Container from '../components/publicComponents/Container'
import PostWindow from '../components/PostPage/PostWindow';
import PostSent from '../components/PostPage/PostSent';
import postStore from '../store/postStore';

const PostPage: React.FC = observer(() => {
    const [isSent , setIsSent] = useState<boolean>(false);
    const postArea = useRef<HTMLTextAreaElement>(null);

    const toggleIsSent = () => {
        setIsSent(!isSent);
        console.log(isSent);
    };

    return (
        <Container>
            <CenterView>
                {isSent ? 
                    <PostSent reset={toggleIsSent} /> : 
                    <PostWindow postSend={() => postStore.handlePost(postArea.current?.value, () => toggleIsSent)}
                        postArea={postArea}
                    />
                }
            </CenterView>
        </Container>
    );
});

export default PostPage;
