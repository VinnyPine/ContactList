import { StyledInput } from "./style";
import { UseFormRegister } from "react-hook-form";

interface ButtonProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  name: string;
  errorMessage?: string;
  text: string;
  register: UseFormRegister<any>;
  placeholder?: string;
}

export const Input = ({
  type,
  name,
  errorMessage,
  text,
  register,
  placeholder,
}: ButtonProps) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </StyledInput>
  );
};
