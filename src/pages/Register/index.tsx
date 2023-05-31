import { useContext } from "react";
import { ClientContext } from "../../providers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./validator";
import { StyledRegister } from "./style";
import { Link } from "react-router-dom";
import { RegisterData } from "../../types";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export const Register = () => {
  const { registerClient, isLoadingClient } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  return (
    <StyledRegister>
      <Header text="Register" />

      <form onSubmit={handleSubmit(registerClient)}>
        <Input
          type="text"
          name="firstName"
          register={register}
          text="Nome"
          errorMessage={errors?.firstName?.message}
        />
        <Input
          type="text"
          name="lastName"
          register={register}
          text="Sobrenome"
          errorMessage={errors?.lastName?.message}
        />
        <Input
          type="text"
          name="email"
          register={register}
          text="Email"
          errorMessage={errors?.email?.message}
        />
        <Input
          type="text"
          name="phone"
          register={register}
          text="Telefone"
          errorMessage={errors?.phone?.message}
        />
        <Input
          type="password"
          name="password"
          register={register}
          text="Senha"
          errorMessage={errors?.password?.message}
        />
        <Input
          type="password"
          name="confirmPassword"
          register={register}
          text="Confirmar senha"
          errorMessage={errors?.confirmPassword?.message}
        />

        <InputRadio register={register} />

        <Button type="submit">Register</Button>
        {isLoadingClient && <span>Carregando...</span>}
      </form>

      <Link to={"/"}>Login</Link>
    </StyledRegister>
  );
};
