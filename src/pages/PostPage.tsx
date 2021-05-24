import React, { useRef, useState } from 'react'
import { observer } from 'mobx-react';
import CenterView from '../components/PublicComponents/CenterView'
import Container from '../components/PublicComponents/Container'
import PostWindow from '../components/PostPage/PostWindow';
import PostSent from '../components/PostPage/PostSent';
import postStore from '../store/postStore';
import userStore from '../store/userStore';
import postRepository from '../repository/postRepository';


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
                    <PostWindow postSend={() => postStore.sendPost(postArea.current?.value, () => toggleIsSent)}
                        postArea={postArea}
                    />
                }
            </CenterView>
        </Container>
    );
});

export default PostPage;
