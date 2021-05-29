import React, { useState } from 'react';
import Container from '../components/SharedComponents/Container';
import SignUpBox from '../components/SignUp/SignUpBox';
import Success from '../components/SignUp/Success';
import { observer } from 'mobx-react';

const SignUp: React.FC = observer(() => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // is sign up success ?

    return (
        <Container>
            {isSuccess ? <Success /> : <SignUpBox submit={() => setIsSuccess(true)} />}
        </Container>
    );
});

export default SignUp;