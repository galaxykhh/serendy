import React, { useRef, useState } from 'react'
import { observer } from 'mobx-react';
import CenterView from '../components/PublicComponents/CenterView'
import Container from '../components/PublicComponents/Container'
import PostWindow from '../components/PostPage/PostWindow';
import PostSent from '../components/PostPage/PostSent';
import postStore from '../store/postStore';
import CircleLoader from '../components/PublicComponents/CircleLoader';

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
                        <PostWindow postSend={() => postStore.sendPost(postArea.current?.value, toggleIsSending, toggleIsSent)}
                            postArea={postArea}
                        />
                    }
                </CenterView>
            </Container>
        );
    };
});

export default PostPage;
