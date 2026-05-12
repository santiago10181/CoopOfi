import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import  {useAuth}  from '../../global_hooks/UserContext';

export const useLoginForm = () => {
  const formMethods = useForm({ mode: "onTouched" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = useCallback(async (data) => {
    formMethods.clearErrors("root");

    try {
      const response = await fetch(`http://localhost:3000/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        formMethods.setError("root", {
          type: "server",
          message: result.error || "Error en credenciales",
        });
        return;
      }

      login(result.token, result.user);
      navigate("/CoopOfi/dashboard", { replace: true });
    } catch (error) {
      formMethods.setError("root", {
        type: "fetch",
        message: "Error de conexión. Intenta de nuevo.",
      });
    }
  }, [formMethods, navigate, login]);

  return {
    ...formMethods,
    handleLogin,
  };
};