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
  const [user, setUser] = useState<Client | null>(null);
  const [infoMessage, setInfoMessage] = useState<string>("");

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
        infoMessage,
        registerClient,
        loginClient,
        verifyToken,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
