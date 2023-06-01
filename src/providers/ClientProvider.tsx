import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  Client,
  ClientProps,
  ClientValues,
  LoginData,
  RegisterData,
} from "../types";

export const ClientContext = createContext({} as ClientValues);

export const ClientProvider = ({ children }: ClientProps) => {
  const navigate = useNavigate();
  const [isLoadingClient, setIsLoadingClient] = useState(false);
  const [user, setUser] = useState<Client>({} as Client);
  const [infoMessage, setInfoMessage] = useState<string>("");

  const hasUser = user.id ? true : false;

  useEffect(() => {
    setInfoMessage("");
  }, []);

  const verifyToken = async () => {
    const token = localStorage.getItem("@contacts-list:token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      setIsLoadingClient(true);
      const response = await api.get("/token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error(error);
      localStorage.clear();
    } finally {
      setIsLoadingClient(false);
    }
  };

  const registerClient = async (data: RegisterData) => {
    try {
      setIsLoadingClient(true);
      await api.post("/clients", data);

      setInfoMessage("Sucesso ao criar conta!");

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingClient(false);
    }
  };

  const loginClient = async (data: LoginData) => {
    try {
      setIsLoadingClient(true);
      const response = await api.post("/login", data);

      const token: string = response.data?.token;

      localStorage.setItem("@contacts-list:token", token);

      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      if (error?.response?.status === 401) {
        setInfoMessage("Email e/ou senha inválidos");
      } else {
        setInfoMessage("Ocorreu um erro no servidor, tente novamente.");
      }
    } finally {
      setIsLoadingClient(false);
    }
  };

  const editClient = async (data: RegisterData, userId: string) => {
    const token = localStorage.getItem("@contacts-list:token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      setIsLoadingClient(true);
      await api.patch(`/clients/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInfoMessage("Sucesso ao criar conta!");

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingClient(false);
    }
  };

  const removeClient = async (userId: string) => {
    const token = localStorage.getItem("@contacts-list:token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      setIsLoadingClient(true);
      await api.delete(`/clients/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingClient(false);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        isLoadingClient,
        user,
        hasUser,
        infoMessage,
        registerClient,
        loginClient,
        verifyToken,
        editClient,
        removeClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
