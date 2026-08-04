// src/global_hooks/useAdminDashboard.js

import { useState, useEffect } from "react";

/**
 * Hook mínimo para obtener datos básicos del admin.
 * Solo consume /admin/dashboard para el sidebar.
 */
export const useAdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No hay sesión activa");
          setLoading(false);
          return;
        }

        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
        const response = await fetch(`${API_URL}/admin/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (response.ok) {
          setAdminData(result.user);
        } else {
          setError(result.error || "Error al cargar datos del admin");
        }
      } catch (err) {
        setError("Sin conexión al servidor");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  return { adminData, loading, error };
};