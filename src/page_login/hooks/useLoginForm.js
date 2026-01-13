// src/pages/login_page/hooks/useLoginForm.js
import { useForm } from "react-hook-form";

// src/page_login/hooks/useLoginForm.js
export const useLoginForm = () => {
  const formMethods = useForm({ mode: "onTouched" });

  const handleLogin = async (data) => {
    // Simulamos una petición al servidor de 2 segundos
    // Esto es lo que obligará al botón a quedarse en "Loading"
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Login exitoso:", data);
  };

  return { ...formMethods, handleLogin };
};