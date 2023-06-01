import styled from "styled-components";

export const StyledEditProfileForm = styled.form`
  background-color: var(--color-gray200);
  padding: 20px;
  border-radius: 8px;
  width: clamp(280px, 80vw, 400px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .buttons-case {
    display: flex;
    gap: 20px;
  }
`;
