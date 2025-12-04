import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./PrivateRoutes/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import IAUser from "./componentes_dashboard/dashboard_user/layout/IAUser";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/CoopOfi" element={<Home />} />
        <Route path="/CoopOfi/login/" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Routes to="/CoopOfi/dashboard/" element={<Dashboard />}>
        <Route index element={< IAUser />} />
      </Routes>      
    </AuthProvider>
  );
};

export default App;
