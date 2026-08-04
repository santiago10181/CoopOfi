import { useState, useEffect } from "react";

export const useDataUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

    const fetchUserData = async () => {
      if (!token) {
        setError("No hay token de autenticación.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/creditos/data-user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          signal: abortController.signal, 
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const jsonResponse = await response.json();

        if (!jsonResponse.success) {
          throw new Error(jsonResponse.message || "Error al obtener los datos");
        }

        setUserData(jsonResponse.data); 
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Error al cargar datos del usuario");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { userData, loading, error };
};