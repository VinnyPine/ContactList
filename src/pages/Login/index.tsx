import { useContext, useEffect } from "react";
import { ClientContext } from "../../providers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./validator";
import { StyledLogin } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { LoginData } from "../../types";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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
      <Header text="Login" />

      <form onSubmit={handleSubmit(loginClient)}>
        <Input
          type="email"
          text="Email:"
          name="email"
          placeholder="example@mail.com"
          register={register}
          errorMessage={errors?.email?.message}
        />

        <Input
          type="password"
          text="Senha:"
          name="password"
          placeholder="**********"
          register={register}
          errorMessage={errors?.password?.message}
        />

        <Button type="submit">Acessar</Button>
        {isLoadingClient && <span>Carregando...</span>}
      </form>

      {infoMessage && <div className="info-message">{infoMessage}</div>}

      <Link to={"/register"}>Cadastrar</Link>
    </StyledLogin>
  );
};
