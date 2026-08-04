import { useState } from "react";

export const useSubmitForm = () => {
  const [modalStatus, setModalStatus] = useState(null);
  const [modalMessage, setModalMessage] = useState("");

  const closeModal = () => setModalStatus(null);
  const retryForm = () => setModalStatus(null); 

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

    if (!token) {
      setModalMessage("Sesión expirada. Por favor, inicia sesión de nuevo.");
      setModalStatus("error");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/creditos/nueva-solicitud`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setModalMessage(result.message || "¡Solicitud enviada con éxito!");
        setModalStatus("success");
      } else {
        setModalMessage(result.message || "No se pudo procesar la solicitud.");
        setModalStatus("error");
      }
    } catch (err) {
      setModalMessage("Sin conexión al servidor. Verifica tu red e intenta de nuevo.");
      setModalStatus("error");
      console.error("Error de red:", err.message);
    }
  };

  return { onSubmit, modalStatus, modalMessage, closeModal, retryForm };
};