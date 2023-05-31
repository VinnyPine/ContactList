import { StyledInputRadio } from "./style";
import { UseFormRegister } from "react-hook-form";

interface InputRadioProps {
  register: UseFormRegister<any>;
}

export const InputRadio = ({ register }: InputRadioProps) => {
  return (
    <StyledInputRadio>
      <input
        type="radio"
        id="radioUser"
        {...register("isAdmin")}
        value="false"
        defaultChecked
      />
      <label htmlFor="radioUser">user</label>

      <input
        type="radio"
        id="radioAdmin"
        {...register("isAdmin")}
        value="true"
      />
      <label htmlFor="radioAdmin">admin</label>
    </StyledInputRadio>
  );
};
