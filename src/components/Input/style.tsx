import styled from "styled-components";

export const StyledInput = styled.div`
  /* padding: 0 7px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  label {
    font-family: inherit;
    font-weight: 500;
    font-size: var(--font-size3);
  }

  input {
    height: 30px;
    box-shadow: 2px 3px 6px -2px;
    border-radius: 4px;
    border: none;
    padding: 0 5px;
  }

  p {
    position: absolute;
    top: 5px;
    left: 5px;

    color: #9c3d3d;
  }
`;
