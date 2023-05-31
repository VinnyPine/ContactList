import { StyledInputRadio } from "./style";
import { UseFormRegister } from "react-hook-form";

interface InputRadioProps {
  register: UseFormRegister<any>;
  defaultCheck?: boolean;
}

export const InputRadio = ({ register, defaultCheck }: InputRadioProps) => {
  return (
    <StyledInputRadio>
      <input
        type="radio"
        id="radioUser"
        {...register("isAdmin")}
        value="false"
        defaultChecked={defaultCheck ? undefined : true}
      />
      <label htmlFor="radioUser">user</label>

      <input
        type="radio"
        id="radioAdmin"
        {...register("isAdmin")}
        value="true"
        defaultChecked={defaultCheck}
      />
      <label htmlFor="radioAdmin">admin</label>
    </StyledInputRadio>
  );
};
