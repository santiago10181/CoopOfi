import { useState } from "react";

export const useSubmitForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (url, data) => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const dataBackend = await response.json();
        console.log("Respuesta del backend:", dataBackend);
        return true;
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.error);
        return false;
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión al servidor");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};