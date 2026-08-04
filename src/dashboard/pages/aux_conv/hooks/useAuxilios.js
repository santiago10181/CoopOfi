import { useCallback, useEffect, useState } from 'react';

export const useAuxilios = () => {
  const [auxilios, setAuxilios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const refetch = useCallback(() => {
    setReloadTrigger((currentValue) => currentValue + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

    const fetchAuxilios = async () => {
      setLoading(true);
      setError('');

      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('No hay sesión activa');
        }

        const response = await fetch(`${API_URL}/auxilios`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            result.error ||
              result.message ||
              'Error al cargar las solicitudes'
          );
        }

        setAuxilios(result.auxilios ?? []);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message || 'Sin conexión al servidor');
          setAuxilios([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchAuxilios();

    return () => controller.abort();
  }, [reloadTrigger]);

  return {
    auxilios,
    loading,
    error,
    refetch,
  };
};