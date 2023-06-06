import { StyledHeader } from "./style";
import { useNavigate } from "react-router-dom";
import { Container } from "../Container";
import { Button } from "../Button";

interface HeaderProps {
  hasUser?: boolean;
}

export const Header = ({ hasUser }: HeaderProps) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledHeader>
      <Container>
        {<h2 className="title-header">Contact List</h2>}
        {hasUser && <Button onClick={logout}>logout</Button>}
      </Container>
    </StyledHeader>
  );
};
