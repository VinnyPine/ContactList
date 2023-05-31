import { useContext, useEffect } from "react";
import { ClientContext } from "../../providers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./validator";
import { StyledLogin } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { LoginData } from "../../types";

export const Login = () => {
  const { loginClient, isLoadingClient, infoMessage } =
    useContext(ClientContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  useEffect(() => {
    const token = localStorage.getItem("@contacts-list:token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

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
        {isLoadingClient && <span>Carregando...</span>}
      </form>

      {infoMessage && <div>{infoMessage}</div>}

      <Link to={"/register"}>Cadastrar</Link>
    </StyledLogin>
  );
};
