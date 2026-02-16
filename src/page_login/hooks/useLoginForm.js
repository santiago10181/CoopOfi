import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { useAuth } from './useAuth';

export const useLoginForm = () => {
  const formMethods = useForm({ mode: "onTouched" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const UsuarioPrueba = { 
    email: "user@email.com", 
    password: "123456789",
    // Datos simulados del usuario
    user: {
      id: "demo-001",
      nombre: "Usuario Demo",
      email: "user@coopoficina.com",
      rol: "asociado"
    },
    token: "demo-token-123456789" // Token simulado
  };

  const handleLogin = useCallback(async (data) => {
    setIsSubmitting(true);

    try {
      // ✅ PRIMERO: Verificar si es el usuario de prueba
      if (data.email === UsuarioPrueba.email && data.password === UsuarioPrueba.password) {
        // Simular delay de red para UX realista
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Login exitoso con datos simulados
        login(UsuarioPrueba.token, UsuarioPrueba.user);
        navigate('/dashboard');
        return; // Salir aquí, no intentar conexión al servidor
      }

      // ❌ Si NO es usuario de prueba, intentar backend real
      const response = await fetch('http://localhost:3000/api/auth/login', {
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
        navigate('/dashboard');
      } else {
        formMethods.setError('root', { 
          message: result.error || 'Error en credenciales' 
        });
      }
    } catch (error) {
      // Error de conexión al backend
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
