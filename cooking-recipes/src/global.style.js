import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #212940;
    font-family: Poppins, sans-serif;
  }

  .site-wrapper {
    padding-top: 70px;
    margin: 0 auto;
    width: 1360px;
  }
`;

export default GlobalStyle;