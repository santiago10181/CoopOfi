import { useEffect, useState } from 'react';

export const useCreditos = () => {
  const [creditos, setCreditos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchCreditos = async () => {
      if (isMounted) {
        setLoading(true);
        setError('');
      }

      try {
        const token = localStorage.getItem('token');

        if (!token) {
          if (isMounted) {
            setCreditos([]);
            setError('No hay sesión activa');
            setLoading(false);
          }
          return;
        }

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
        const response = await fetch(`${API_URL}/creditos`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        let result = {};

        try {         
          result = await response.json();
        } catch {
          result = {};
        }

        if (!isMounted) return;

        if (!response.ok) {
          setCreditos([]);
          setError(result.message || 'Error al cargar créditos'); // Cambiado a result.message
          return;
        }

        // ✅ CORRECCIÓN AQUÍ: Leemos 'result.data' en lugar de 'result.solicitudes'
        setCreditos(result.data ?? []);
        setError('');
      } catch {
        if (!isMounted) return;
        setCreditos([]);
        setError('Sin conexión al servidor');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCreditos();

    return () => {
      isMounted = false;
    };
  }, []);

  return { creditos, loading, error };
};