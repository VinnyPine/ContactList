import { StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container";
import { Button } from "../Button";

interface HeaderProps {
  text?: string;
  hasUser?: boolean;
}

export const Header = ({ text, hasUser }: HeaderProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <Container>
        {text && <h2 className="title-header">{text}</h2>}
        {hasUser && <Button onClick={logout}>logout</Button>}
      </Container>
    </StyledHeader>
  );
};
