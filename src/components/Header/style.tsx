import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-primary300);
  width: 100%;
  height: 60px;
  display: flex;
  box-shadow: 0px 0px 10px 0px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }
`;
