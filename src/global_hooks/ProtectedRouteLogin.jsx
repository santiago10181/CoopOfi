// src/global_hooks/ProtectedRouteLogin.jsx
import { Navigate } from "react-router-dom";

import { useAuth } from "./UserContext";
import { PageLoader } from "../dashboard/pages/components/PageLoader";

/**
 * Protege rutas privadas según el estado de autenticación y los roles permitidos.
 *
 * La seguridad visual evita que un usuario navegue a una sección no autorizada
 * desde React. El backend debe repetir esta validación antes de procesar
 * operaciones sensibles, porque el frontend no es una frontera de seguridad.
 *
 * @param {React.ReactNode} children - Vista que se renderiza si el acceso es válido.
 * @param {string[]} allowedRoles - Roles autorizados para la ruta.
 */
export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, loading, user } = useAuth();

  // Esperamos la restauración de la sesión antes de decidir una redirección.
  // Así evitamos enviar al login a un usuario que sí tiene un token válido.
  if (loading) {
    return <PageLoader />;
  }

  // Sin sesión no hay acceso a ninguna ruta privada.
  if (!isAuthenticated) {
    return <Navigate to="/CoopOfi/" replace />;
  }

  // Si la ruta declara roles, el usuario debe pertenecer a uno de ellos.
  // Si no declara roles, basta con estar autenticado.
  const hasRequiredRole =
    allowedRoles.length === 0 || allowedRoles.includes(user?.rol);

  if (!hasRequiredRole) {
    return <Navigate to="/CoopOfi/sin-autorizacion" replace />;
  }

  return children;
};