import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', 'sans-serif';
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
