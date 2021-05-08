import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
// theme
import { theme } from './style/theme';
// pages
import Start from './pages/start';
import Main from './pages/main';

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme} >
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <Start />
                        </Route>
                        <Route exact path='/main'>
                            <Main />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
