// dashboard/pages/Home/hooks/useDashboard.jsx
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
          return;
        }
        // 📡 Token real
        const response = await fetch('http://localhost:3000/api/dashboard', {
          method:  'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type':  'application/json',
          },
        });

        const result = await response.json();

        if (response.ok) {
          // ✅ Normaliza: aplana user + mete prestamos al mismo nivel
          setUserData({ ...result.user, prestamos: result.prestamos ?? [] });
        } else {
          setError(result.error || 'Error al cargar dashboard');
        }

      } catch (err) {
        setError('Sin conexión al servidor');
        console.error(err);
      } finally {
        setLoading(false); // ✅ siempre se ejecuta, incluso tras return
      }
    };

    fetchDashboard();
  }, []);

  return { userData, loading, error };
};
