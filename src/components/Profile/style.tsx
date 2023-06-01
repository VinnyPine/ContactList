import styled from "styled-components";

export const StyledSectionProfile = styled.section`
  background-color: var(--color-gray100);

  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;

  > div > div:first-child {
    background-color: var(--color-gray300);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 40px;
  }
`;

export const StyledProfile = styled.div`
  background-color: var(--color-gray200);

  display: flex;
  gap: clamp(10px, 20%, 100px);
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
