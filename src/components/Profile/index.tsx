import { useContext } from "react";
import { ClientContext } from "../../providers";
import { getDate } from "../../utils";
import { Container } from "../Container";
import { StyledProfile, StyledSectionProfile } from "./style";

export const Profile = () => {
  const { isLoadingClient, user } = useContext(ClientContext);

  return (
    <StyledSectionProfile>
      <Container>
        {isLoadingClient && <div>Carregando...</div>}
        {user && (
          <StyledProfile id={user.id}>
            <div>
              <h2 className="title-user">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-user">Email: {user.email}</p>
            </div>
            <div>
              <p className="text-user">Telefone: {user.phone}</p>
              <p className="text-user">Criado em: {getDate(user.createdAt)}</p>
            </div>
          </StyledProfile>
        )}
      </Container>
    </StyledSectionProfile>
  );
};
