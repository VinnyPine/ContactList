import { useContext } from "react";
import { ClientContext } from "../../providers";
import { StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container";
import { Button } from "../Button";

export const Header = () => {
  const { user } = useContext(ClientContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <Container>
        <h2 className="title-header">Dashboard</h2>
        {user && <Button onClick={logout}>logout</Button>}
      </Container>
    </StyledHeader>
  );
};
