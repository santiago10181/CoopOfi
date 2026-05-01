import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { useAuth } from './useAuth';


export const useLoginForm = () => {
  const formMethods = useForm({ mode: "onTouched" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = useCallback(async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: data.email,
          password: data.password 
        })
      });

      const result = await response.json();

      if (response.ok) {
        login(result.token, result.user);
        navigate('/CoopOfi/dashboard');
      } else {
        formMethods.setError('root', { 
          message: result.error || 'Error en credenciales' 
        });
      }
    } catch (error) {
      formMethods.setError('root', { 
        message: 'Error de conexión. Usa el usuario de prueba: user@coopoficina.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formMethods, navigate, login]);


  return { 
    ...formMethods, 
    handleLogin, 
    isSubmitting 
  };
};
