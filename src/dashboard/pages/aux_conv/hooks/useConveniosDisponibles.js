import { useCallback, useEffect, useState } from 'react';

export const useConveniosDisponibles = () => {
  const [convenios, setConvenios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const refetch = useCallback(() => {
    setReloadTrigger((currentValue) => currentValue + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

    const fetchConvenios = async () => {
      setLoading(true);
      setError('');

      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('No hay sesión activa.');
        }

        const response = await fetch(
          `${API_URL}/auxilios/convenios-disponibles`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
            signal: controller.signal,
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.message ||
              result.error ||
              'No fue posible cargar los auxilios y convenios.'
          );
        }

        setConvenios(result.convenios ?? []);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(
            error.message ||
              'No fue posible conectar con el servidor.'
          );
          setConvenios([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchConvenios();

    return () => controller.abort();
  }, [reloadTrigger]);

  return {
    convenios,
    loading,
    error,
    refetch,
  };
};