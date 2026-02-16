import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { useAuth } from './useAuth';  // ← NUEVO

export const useLoginForm = () => {
  const formMethods = useForm({ mode: "onTouched" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();  // ← NUEVO

  const UsuarioPrueba = { email: "user@coopoficina.com", password: "admin123" };

  const handleLogin = useCallback(async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: data.email,
          password: data.password 
        })
      });

      const result = await response.json();

      if (response.ok || (data.email === UsuarioPrueba.email && data.password === UsuarioPrueba.password)) {
        login(result.token, result.user);  // ← CAMBIO: usa useAuth
        navigate('/dashboard');
      } else {
        formMethods.setError('root', { 
          message: result.error || 'Error en credenciales' 
        });
      }
    } catch (error) {
      formMethods.setError('root', { 
        message: 'Error de conexión. Verifica backend.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formMethods, navigate, login]);  // ← AÑADIR login al array

  return { 
    ...formMethods, 
    handleLogin, 
    isSubmitting 
  };
};
