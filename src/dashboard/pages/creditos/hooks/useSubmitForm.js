import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSubmitForm = () => {
  const navigate  = useNavigate();

  // status: null | 'success' | 'error'
  const [modalStatus,  setModalStatus]  = useState(null);
  const [modalMessage, setModalMessage] = useState("");

  const closeModal = () => setModalStatus(null);
  const retryForm  = () => setModalStatus(null); // Vuelve al formulario limpio

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      // ── Fetch real ─────────────────────────────────────────
      const response = await fetch(
        "http://localhost:3000/api/creditos/nueva-solicitud",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setModalStatus("success");
      } else {
        setModalMessage(result.error || "No se pudo procesar la solicitud.");
        setModalStatus("error");
      }

    } catch (err) {
      setModalMessage("Sin conexión al servidor. Verifica tu red e intenta de nuevo.");
      setModalStatus("error");
      console.error("Error de red:", err.message);
    }
  };

  return {
    onSubmit,
    modalStatus,
    modalMessage,
    closeModal,
    retryForm,
  };
};
