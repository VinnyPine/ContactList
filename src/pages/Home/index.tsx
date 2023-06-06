import { useContext, useEffect } from "react";
import { ClientContext } from "../../providers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./validator";
import { StyledHome } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { LoginData } from "../../types";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Home = () => {
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
    <StyledHome>
      <Header />

      <div className="side">
        <div className="welcome">
          <h2 className="title-home">
            Organize seus contatos de forma fácil e eficiente com o Contact List
          </h2>
          <p className="text-home">
            O Contact List é uma plataforma online que permite que você crie e
            gerencie seus contatos de forma simples e organizada. Com recursos
            de pesquisa e filtro, você pode encontrar rapidamente as informações
            que precisa, e com nossa interface intuitiva, você pode adicionar,
            editar e excluir contatos com facilidade
          </p>
        </div>

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

          <Button type="submit" variant="primary">
            Acessar
          </Button>

          {isLoadingClient && <span>Carregando...</span>}
          {infoMessage && (
            <div
              className={`info-message ${
                infoMessage.includes("erro") ||
                infoMessage.includes("inválidos")
                  ? "error"
                  : null
              }`}
            >
              {infoMessage}
            </div>
          )}

          <div className="register">
            <p className="text-detail">
              Comece agora mesmo! Cadastre-se gratuitamente e comece a organizar
              seus contatos hoje mesmo.{" "}
            </p>

            <Link to={"/register"}>Cadastrar</Link>
          </div>
        </form>
      </div>
    </StyledHome>
  );
};
