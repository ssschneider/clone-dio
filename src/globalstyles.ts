import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #f1f1f1;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: #1E192C;
    }
`;

export default GlobalStyle;
