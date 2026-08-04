// Archivo: useSubmitAuxilioForm.js
import { useState } from 'react';

export const useSubmitAuxilioForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (url, data) => {
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        return {
          success: false,
          message: 'No hay sesión activa.',
        };
      }

      // Forzamos que la descripción sea un string seguro
      const payload = {
        convenioid: Number(data.convenioid),
        description: data.description ? String(data.description).trim() : ""
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: result.message || result.error || 'No se pudo procesar la solicitud.',
        };
      }

      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      console.error('Error enviando solicitud:', error);
      return {
        success: false,
        message: 'Error de conexión con el servidor.',
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
  };
};