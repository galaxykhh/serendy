import React, { useRef, useState } from 'react'
import { observer } from 'mobx-react';
import CenterView from '../components/SharedComponents/CenterView'
import Container from '../components/SharedComponents/Container'
import PostWindow from '../components/PostPage/PostWindow';
import PostSent from '../components/PostPage/PostSent';
import postStore from '../store/postStore';
import CircleLoader from '../components/SharedComponents/CircleLoader';
import { flowResult } from 'mobx';

const PostPage: React.FC = observer(() => {
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isSent , setIsSent] = useState<boolean>(false);
    const postArea = useRef<HTMLTextAreaElement>(null);

    const toggleIsSent = (): void => {
        setIsSent(!isSent);
    };;

    const toggleIsSending = (): void => {
        setIsSending(!isSending);
    };

    const sendPost = async () => {
        toggleIsSending();
        const isSuccess = await flowResult(postStore.sendPost(postArea.current?.value));
        if (isSuccess) {
            toggleIsSending();
            toggleIsSent();
        } else {
            toggleIsSending();
        };
    };

    const reset = (): void => {
        setIsSent(false);
        setIsSending(false);
    };



    if (isSending && !isSent) {
        return (
            <Container>
                <CenterView>
                    <CircleLoader />
                </CenterView>
            </Container>
        );
    } else {
        return (
            <Container>
                <CenterView>
                    {isSent ? 
                        <PostSent reset={reset} /> : 
                        <PostWindow postSend={sendPost}
                            postArea={postArea}
                        />
                    }
                </CenterView>
            </Container>
        );
    };
});

export default PostPage;
