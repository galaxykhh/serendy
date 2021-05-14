import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import { useEffect } from 'react';
import PrivateRoute from './components/publicComponents/PrivateRoute';
import { theme } from './style/theme';
import Start from './pages/Start';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import MyPage from './pages/MyPage';
import ChatPage from './pages/ChatPage';
import PostPage from './pages/PostPage';
import userStore from './store/userStore';
import { io } from 'socket.io-client';
import { BASE_URL } from './config';

const App: React.FC = observer(() => {

    useEffect(() => {
        if (userStore.isSignIn) {
            userStore.setUserSocket(io('http://localhost:8000'));
            userStore.saveSocketID();
        } else {
            userStore.userSocket?.disconnect();
            userStore.setSocketID(null);
        }
    }, [userStore.isSignIn]); //eslint-disable-line

    useEffect(() => {
        userStore.signInWithToken();
    }, []);

    return (
        <>
            <ThemeProvider theme={theme} >
                <GlobalStyle />
                <BrowserRouter>
                    <Header />
                    <SideBar />
                    <Switch>
                        <Route exact path='/'>
                            <Start />
                        </Route>
                        <Route exact path='/login'>
                            <SignIn />
                        </Route>
                        <Route exact path='/signup'>
                            <SignUp />
                        </Route>
                        <Route exact path='/findpw'>
                            Find Password
                        </Route>
                        <PrivateRoute exact path='/main'>
                            <Main />
                        </PrivateRoute>
                        <PrivateRoute exact path='/mypage'>
                            <MyPage />
                        </PrivateRoute>
                        <PrivateRoute exact path='/chat'>
                            <ChatPage />
                        </PrivateRoute>
                        <PrivateRoute exact path='/post'>
                            <PostPage />
                        </PrivateRoute>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
});

export default App;
