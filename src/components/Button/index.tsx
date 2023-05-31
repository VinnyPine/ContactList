import { ReactNode } from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
