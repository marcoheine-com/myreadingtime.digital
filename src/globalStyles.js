import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export default GlobalStyles;
