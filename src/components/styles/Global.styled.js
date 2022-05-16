import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.body };
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    img {
        max-width: 100%;
    }
`