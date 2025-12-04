import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./PrivateRoutes/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/CoopOfi" element={<Home />} />
        <Route path="/CoopOfi/login/" element={<Login />} />
        <Route path="/CoopOfi/dashboard/" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
