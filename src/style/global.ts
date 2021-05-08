import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'MGothic';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Logo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'MGothic';
    }

    .logo {
        font-family: 'Logo';
    }
`;

export default GlobalStyle;