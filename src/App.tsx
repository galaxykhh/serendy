import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import PrivateRoute from './components/SharedComponents/PrivateRoute';
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
import RecipientsPage from './pages/RecipientsPage';
import FindPW from './pages/FindPW';
import SenderPage from './pages/SenderPage';

const App: React.FC = observer(() => {
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
                        <Route exact path='/signin'>
                            <SignIn />
                        </Route>
                        <Route exact path='/signup'>
                            <SignUp />
                        </Route>
                        <Route exact path='/findpw'>
                            <FindPW />
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
                        <PrivateRoute exact path='/recipients' >
                            <RecipientsPage />
                        </PrivateRoute>
                        <PrivateRoute exact path='/sender' >
                            <SenderPage />
                        </PrivateRoute>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
});

export default App;
