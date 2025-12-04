import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./PrivateRoutes/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import IAUser from "./componentes_dashboard/dashboard_user/layout/IAUser";
import SolicitudCredito from "./componentes_dashboard/dashboard_user/layout/SolicitudCredito";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/CoopOfi" element={<Home />} />
        <Route path="/CoopOfi/login/" element={<Login />} />
        <Route path="*" element={<Home />} />
        <Route path="/CoopOfi/dashboard/" element={<Dashboard />}>
          <Route index element={< IAUser />} />
          <Route path="solicitud-creditos" element={<SolicitudCredito />} />
          <Route path="auxilios" element={<SolicitudCredito />} />
        </Route>  
      </Routes>
    </AuthProvider>
  );
};

export default App;
