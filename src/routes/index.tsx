import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route element={}>
        <Route path="/dashboard" element={} />
      </Route> */}
    </Routes>
  );
};
