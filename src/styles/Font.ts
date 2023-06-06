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

  .title-home {
    font-size: var(--font-size6);
  }

  .text-contact-card {
    font-size: var(--font-size3);
  }

  .text-detail {
    font-size: var(--font-size2);
  }

  .text-home {
    font-size: var(--font-size4);
  }

  @media (min-width: 600px) {
    .title-home {
    font-size: var(--font-size8);
  }
  }

`;
