import { ReactNode } from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
