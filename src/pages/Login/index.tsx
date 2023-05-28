import { useContext } from "react";
import { ClientContext } from "../../providers/ClientProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, LoginSchema } from "./validator";
import { StyledLogin } from "./style";

export const Login = () => {
  const { loginClient, loading } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <StyledLogin>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(loginClient)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors?.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        {errors?.password && <p>{errors.password.message}</p>}

        <button type="submit">Acessar</button>
        {loading && <span>Loading...</span>}
      </form>
    </StyledLogin>
  );
};
