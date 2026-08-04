import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No hay sesión activa');
          setLoading(false); // Asegurarnos de quitar el loading si retornamos antes
          return;
        }
        
        // Usamos variable de entorno de Vite
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
        const response = await fetch(`${API_URL}/dashboard`, {
          method:  'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type':  'application/json',
          },
        });

        const result = await response.json();

        if (response.ok) {
          // Como modificamos el backend para que traiga todo junto, 
          // ajustamos la normalización
          setUserData(result.user ? { ...result.user, prestamos: result.prestamos ?? [] } : result);
        } else {
          setError(result.error || 'Error al cargar dashboard');
        }

      } catch (err) {
        setError('Sin conexión al servidor');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { userData, loading, error };
};