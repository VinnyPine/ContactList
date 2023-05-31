import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
  .title-header {
    font-size: var(--font-size6);
    color: var(--color-white);
  }

  .title-profile {
    font-size: var(--font-size5);
  }

  .title-contact {
    font-size: var(--font-size5);
    color: var(--color-white);
  }

  .title-contact-card {
    font-size: var(--font-size4);
  }

  .text-contact-card {
    font-size: var(--font-size3);
  }

`;
