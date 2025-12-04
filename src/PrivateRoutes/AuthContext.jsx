import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    navigate("/CoopOfi/dashboard/");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/CoopOfi/login/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook en minúscula por convención
export const useAuth = () => useContext(AuthContext);
