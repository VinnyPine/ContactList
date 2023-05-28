import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { RegisterData } from "../pages/Register/validator";

interface ClientProps {
  children: ReactNode;
}

interface ClientValues {
  loading: boolean;
  registerClient: (data: RegisterData) => Promise<void>;
}

export const ClientContext = createContext({} as ClientValues);

export const ClientProvider = ({ children }: ClientProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registerClient = async (data: RegisterData) => {
    try {
      setLoading(true);
      const response = await api.post("/clients", data);
      console.log(response.data);

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ClientContext.Provider value={{ loading, registerClient }}>
      {children}
    </ClientContext.Provider>
  );
};
