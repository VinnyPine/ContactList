import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    background-color: var(--color-gray200);
    padding: 20px;
    border-radius: 8px;
    width: clamp(280px, 80%, 400px);

    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .info-message {
    margin-top: 15px;
    color: var(--color-primary300);
  }

  a {
    margin-top: 20px;
  }
`;
