import { StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container";
import { Button } from "../Button";
import { Client } from "../../types";

interface HeaderProps {
  text?: string;
  user?: Client | null;
}

export const Header = ({ text, user }: HeaderProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <Container>
        {text && <h2 className="title-header">{text}</h2>}
        {user && <Button onClick={logout}>logout</Button>}
      </Container>
    </StyledHeader>
  );
};
