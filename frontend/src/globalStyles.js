import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
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
