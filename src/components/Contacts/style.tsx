import styled from "styled-components";

export const StyledSectionContacts = styled.section`
  background-color: var(--color-gray100);

  width: 100%;
  > div > div:first-child {
    background-color: var(--color-primary300);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
  }
`;

export const StyledContact = styled.div`
  background-color: var(--color-gray200);

  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 30px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
