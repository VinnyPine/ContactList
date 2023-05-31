import styled from "styled-components";

export const StyledInput = styled.div`
  /* padding: 0 7px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  height: 60px;
  width: 100%;

  label {
    font-family: inherit;
    font-weight: 500;
    font-size: var(--font-size3);
    display: block;
  }

  input {
    height: 30px;
    box-shadow: 2px 3px 6px -2px;
    border-radius: 4px;
    border: none;
    padding: 0 5px;
    width: 100%;
  }

  p {
    position: absolute;
    bottom: 0px;
    left: 5px;

    color: #9c3d3d;
  }
`;
