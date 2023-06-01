import styled from "styled-components";

export const StyledInputRadio = styled.div`
  display: flex;
  gap: 10px;

  label {
    padding: 3px 10px;
    border-radius: 8px;
    border: 1px solid var(--color-gray500);
    background-color: var(--color-gray300);
    font-weight: 500;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: var(--color-primary100);
    color: var(--color-white);
  }
`;
