import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Abel'
}

html, body{
    height: 100vh;
}

body, input, button, textarea{
    font: 400, abel;
}

`;
