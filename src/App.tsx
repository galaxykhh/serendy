import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
// PrivateRoute
import PrivateRoute from './components/publicComponents/PrivateRoute';
// theme
import { theme } from './style/theme';

import Start from './pages/Start';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import MyPage from './pages/MyPage';

function App() {

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
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
