import styled from "styled-components";
import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  height: 30px;
  box-shadow: 2px 3px 6px -2px;
  border-radius: 4px;
  border: none;
  font-family: inherit;
  font-weight: 600;
  font-size: var(--font-size3);
  padding: 0 7px;

  ${({ variant }) => {
    switch (variant) {
      case "error":
        return `
          color: var(--color-white);
          background-color: var(--color-error);
        `;
        break;

      default:
        return `
            background-color: var(--color-gray200);
          `;
    }
  }}
`;
