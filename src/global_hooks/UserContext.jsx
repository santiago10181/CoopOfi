import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext(null);

const STORAGE_KEYS = {
  token: "token",
  user: "user",
};

const normalizeUser = (userData) => {
  if (!userData || typeof userData !== "object") return null;

  return {
    id: userData.id ?? null,
    email: userData.email ?? "",
    rol: typeof userData.rol === "string" ? userData.rol.trim().toLowerCase() : null,
    asociadoId: userData.asociadoId ?? null,
    clienteId: userData.clienteId ?? null,
  };
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem(STORAGE_KEYS.token);
      const storedUser = localStorage.getItem(STORAGE_KEYS.user);

      if (storedToken && storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const normalizedUser = normalizeUser(parsedUser);

        if (normalizedUser) {
          setToken(storedToken);
          setUser(normalizedUser);
        } else {
          localStorage.removeItem(STORAGE_KEYS.token);
          localStorage.removeItem(STORAGE_KEYS.user);
        }
      }
    } catch (error) {
      console.error("Error restaurando sesión:", error);
      localStorage.removeItem(STORAGE_KEYS.token);
      localStorage.removeItem(STORAGE_KEYS.user);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback((newToken, userData) => {
    const normalizedUser = normalizeUser(userData);

    if (!newToken || !normalizedUser) {
      throw new Error("Datos de autenticación inválidos en login");
    }

    localStorage.setItem(STORAGE_KEYS.token, newToken);
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(normalizedUser));

    setToken(newToken);
    setUser(normalizedUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.token);
    localStorage.removeItem(STORAGE_KEYS.user);

    setToken(null);
    setUser(null);
  }, []);

  const isAuthenticated = Boolean(token && user);
  const isAdmin = user?.rol === "admin";
  const isAsociado = user?.rol === "asociado";

  const value = useMemo(
    () => ({
      token,
      user,
      loading,
      isAuthenticated,
      isAdmin,
      isAsociado,
      login,
      logout,
    }),
    [token, user, loading, isAuthenticated, isAdmin, isAsociado, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }

  return ctx;
};