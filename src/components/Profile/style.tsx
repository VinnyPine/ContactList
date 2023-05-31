import styled from "styled-components";

export const StyledSectionProfile = styled.section`
  background-color: var(--color-gray100);

  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;

  .title-profile {
    background-color: var(--color-gray300);
    padding: 0 20px;
  }
`;

export const StyledProfile = styled.div`
  background-color: var(--color-gray200);

  display: flex;
  gap: 20%;
  justify-content: center;
  align-items: center;
`;
