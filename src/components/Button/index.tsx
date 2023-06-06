import styled from "styled-components";

export interface ButtonProps {
  variant?: "primary" | "error";
}

export const Button = styled.button<ButtonProps>`
  height: 30px;
  box-shadow: 2px 3px 6px -2px var(--color-black);
  border-radius: 4px;
  border: none;
  font-family: inherit;
  font-weight: 600;
  font-size: var(--font-size3);
  padding: 0 7px;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return `
          color: var(--color-white);
          background-color: var(--color-primary300);
        `;

      case "error":
        return `
          color: var(--color-white);
          background-color: var(--color-error);
        `;

      default:
        return `
            background-color: var(--color-gray200);
          `;
    }
  }}
`;
