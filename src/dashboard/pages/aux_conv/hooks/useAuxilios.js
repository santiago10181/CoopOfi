import { useState, useEffect } from 'react';

export const useAuxilios = () => {
  const [auxilios, setAuxilios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // 👉 NUEVO 1: Estado para disparar la recarga
  const [reloadTrigger, setReloadTrigger] = useState(false); 

  // 👉 NUEVO 2: Función que cambia el trigger para forzar el useEffect
  const refetch = () => setReloadTrigger(prev => !prev);

  useEffect(() => {
    let isMounted = true;

    const fetchAuxilios = async () => {
      // Opcional: setLoading(true) aquí para que se vea que recarga
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          if (isMounted) setError('No hay sesión activa');
          return;
        }

        const response = await fetch('http://localhost:3000/api/auxilios', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();

        if (!isMounted) return;

        if (response.ok) {
          setAuxilios(result.auxilios ?? []);
          setError('');
        } else {
          setError(result.error || 'Error al cargar auxilios');
        }
      } catch (err) {
        if (isMounted) {
          setError('Sin conexión al servidor');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchAuxilios();

    return () => {
      isMounted = false;
    };
  }, [reloadTrigger]); // 👉 NUEVO 3: Agregamos reloadTrigger a las dependencias

  return { auxilios, loading, error, refetch }; 
};