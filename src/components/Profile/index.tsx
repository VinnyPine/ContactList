import { ReactNode, useContext } from "react";
import { ClientContext } from "../../providers";
import { getDate } from "../../utils";
import { Container } from "../Container";
import { StyledProfile, StyledSectionProfile } from "./style";
import { Button } from "../Button";
import { EditProfileForm } from "../EditProfileForm";

interface ProfileProps {
  setFormModal: React.Dispatch<React.SetStateAction<ReactNode>>;
}

export const Profile = ({ setFormModal }: ProfileProps) => {
  const { user } = useContext(ClientContext);

  const handleModal = () => {
    setFormModal(<EditProfileForm />);
  };

  return (
    <StyledSectionProfile>
      <Container>
        <div>
          <h2 className="title-profile">Perfil</h2>
          <Button type="button" onClick={handleModal}>
            Editar
          </Button>
        </div>
        {user && (
          <StyledProfile id={user.id}>
            <div>
              <h2 className="title-user">
                Nome: {user.firstName} {user.lastName}
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
