import { ClientProvider, ContactProvider } from "./providers";
import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <ClientProvider>
        <ContactProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ContactProvider>
      </ClientProvider>
    </>
  );
};

export default App;
