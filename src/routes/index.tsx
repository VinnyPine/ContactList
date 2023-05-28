import { Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/register" element={<Register />} />
      {/* <Route element={}>
        <Route path="/dashboard" element={} />
      </Route> */}
    </Routes>
  );
};
