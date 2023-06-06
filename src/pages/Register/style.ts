import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  form {
    background-color: var(--color-gray200);
    padding: 20px;
    border-radius: 8px;
    width: clamp(280px, 80%, 400px);

    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 2px 2px 8px 0px var(--color-black);
  }
`;
