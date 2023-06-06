import styled from "styled-components";

export const StyledHome = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .welcome {
      padding: 0 18px;
      width: 100%;
      margin-top: 20px;

      .text-home {
        display: none;
      }
    }

    form {
      background-color: var(--color-gray200);
      padding: 20px;
      border-radius: 8px;
      width: clamp(280px, 80%, 400px);
      box-shadow: 2px 2px 8px 0px var(--color-black);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .info-message {
        text-align: center;
        color: var(--color-success);
      }

      .info-message.error {
        color: var(--color-error);
      }

      > .register {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;

        .text-detail {
          text-align: center;
        }
      }
    }
  }

  @media (min-width: 600px) {
    > div {
      flex-direction: row;
      align-items: center;
      height: 100%;
      margin-top: 130px;
      gap: 100px;

      .welcome {
        width: 450px;
        margin-top: 0;

        .title-home {
          line-height: 150%;
        }
        .text-home {
          display: block;
          line-height: 180%;
        }
      }
    }
  }
`;
