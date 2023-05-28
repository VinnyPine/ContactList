import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-primary100: #32c72d;
    --color-primary200: #22b31d;
    --color-primary300: #258622;
    --color-gray100: #c9c9c9;
    --color-gray200: #acacac;
    --color-gray300: #919191;
    --color-gray400: #757575;
    --color-gray500: #505050;
    --color-white: #eeeeee;
    --color-black: #0f0f0f;

    --font-size1: 0.625rem; 
    --font-size2: 0.75rem; 
    --font-size3: 1rem; 
    --font-size4: 1.125rem; 
    --font-size5: 1.25rem; 
    --font-size6: 1.375rem; 
    --font-size7: 1.5625rem; 
    --font-size8: 2rem; 
    --font-size9: 2.5rem;

  }

  body {
    font-family: "Poppins", sans-serif;
  }
`;
