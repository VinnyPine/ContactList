import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: #0000006e;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  inset: 0;

  > div {
    background-color: var(--color-gray100);
    min-width: 200px;
    min-height: 200px;
    border-radius: 8px;
    padding: 20px;
    position: relative;

    > button {
      position: absolute;
      right: 26px;
      top: 28px;
      z-index: 1;

      background-color: var(--color-gray300);
    }
  }
`;
