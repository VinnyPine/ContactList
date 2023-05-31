import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ClientContext } from "../../providers";

export const ProtectedRoutes = () => {
  const { isLoadingClient, verifyToken, hasUser } = useContext(ClientContext);

  useEffect(() => {
    verifyToken();
  }, []);

  if (isLoadingClient) {
    return <div>Carregando...</div>;
  }

  return hasUser ? <Outlet /> : <Navigate to={"/"} />;
};
