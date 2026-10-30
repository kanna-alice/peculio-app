import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./components/layout/PrivateRoute";
import Login from "./pages/login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
