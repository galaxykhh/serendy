import React, { useRef, useState } from 'react'
import { observer } from 'mobx-react';
import CenterView from '../components/PublicComponents/CenterView'
import Container from '../components/PublicComponents/Container'
import PostWindow from '../components/PostPage/PostWindow';
import PostSent from '../components/PostPage/PostSent';
import postStore from '../store/postStore';

const PostPage: React.FC = observer(() => {
    const [isSent , setIsSent] = useState<boolean>(false);
    const postArea = useRef<HTMLTextAreaElement>(null);

    const toggleIsSent = () => {
        if (isSent) {
            setIsSent(false);
            postArea.current!.disabled = false;
        } else {
            setIsSent(true);
            postArea.current!.disabled = true;
        };
    };

    return (
        <Container>
            <CenterView>
                {isSent ? 
                    <PostSent reset={toggleIsSent} /> : 
                    <PostWindow postSend={() => postStore.sendPost(postArea.current?.value, toggleIsSent)}
                        postArea={postArea}
                    />
                }
            </CenterView>
        </Container>
    );
});

export default PostPage;
