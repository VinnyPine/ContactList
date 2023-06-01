import { ReactNode } from "react";
import { StyledButton } from "./style";

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: string;
}

export const Button = ({
  children,
  className,
  onClick,
  type,
  variant,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};
