// src/page_login/hooks/useLoginForm.js
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../global_hooks/UserContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const ROUTES_BY_ROLE = {
  admin: "/CoopOfi/admin/dashboard",
  asociado: "/CoopOfi/dashboard",
};

/**
 * Orquesta validación, envío y redirección del formulario de login.
 *
 * El hook no interpreta el JWT para decidir permisos: utiliza el usuario
 * devuelto por el backend, que ya validó las credenciales y el rol.
 */
export const useLoginForm = () => {
  const formMethods = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = useCallback(
    async ({ email, password }) => {
      formMethods.clearErrors("root");

      try {
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        // El backend debería responder JSON incluso en sus errores.
        const result = await response.json();

        if (!response.ok) {
          formMethods.setError("root", {
            type: "server",
            message: result.error || "No fue posible iniciar sesión.",
          });
          return;
        }

        const redirectPath = ROUTES_BY_ROLE[result.user.rol];

        // Un rol no reconocido nunca debe acceder a una sección privada.
        if (!redirectPath) {
          formMethods.setError("root", {
            type: "authorization",
            message: "Tu cuenta no tiene un rol autorizado para ingresar.",
          });
          return;
        }

        // AuthContext conserva token y perfil para las rutas protegidas.
        login(result.token, result.user);

        navigate(redirectPath, { replace: true });
      } catch {
        formMethods.setError("root", {
          type: "network",
          message: "No fue posible conectar con el servidor. Intenta nuevamente.",
        });
      }
    },
    [formMethods, login, navigate]
  );

  return {
    ...formMethods,
    handleLogin,
  };
};