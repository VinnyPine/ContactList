import { useContext } from "react";
import { ClientContext } from "../../providers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "./validator";
import { StyledRegister } from "./style";
import { Link } from "react-router-dom";
import { RegisterData } from "../../types";

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
      <h2>Register</h2>

      <form onSubmit={handleSubmit(registerClient)}>
        <label htmlFor="firstName">Nome</label>
        <input type="text" id="firstName" {...register("firstName")} />
        {errors?.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Sobrenome</label>
        <input type="text" id="lastName" {...register("lastName")} />
        {errors?.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors?.email && <p>{errors.email.message}</p>}

        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />
        {errors?.phone && <p>{errors.phone.message}</p>}

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        {errors?.password && <p>{errors.password.message}</p>}

        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        {errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <div className="radioCase">
          <input
            type="radio"
            {...register("isAdmin")}
            value="false"
            defaultChecked
          />
          <label htmlFor="confirmPassword">user</label>

          <input type="radio" {...register("isAdmin")} value="true" />
          <label htmlFor="confirmPassword">admin</label>
        </div>

        <button type="submit">Register</button>
        {isLoadingClient && <span>Carregando...</span>}
      </form>

      <Link to={"/"}>Login</Link>
    </StyledRegister>
  );
};
