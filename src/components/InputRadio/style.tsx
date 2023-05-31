import styled from "styled-components";

export const StyledInputRadio = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;

  label {
    padding: 3px 10px;
    border-radius: 8px;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: var(--color-primary100);
    font-weight: 600;
  }
`;
