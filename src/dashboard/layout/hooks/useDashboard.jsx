// dashboard/pages/Home/hooks/useDashboard.jsx
import { useState, useEffect } from 'react';

// Misma forma que devuelve el backend real
const DATOS_SIMULADOS = {
  // ── Home ────────────────────────────────────────────────
  id:     'demo-001',
  rol:    'asociado',
  activo: true,
  name:   'Usuario Demo',
  email:  'user@coopoficina.com',
  cargo:  'Empleado',

  // ── Formulario de crédito ────────────────────────────────
  cedula:           '000000000',
  nombres:          'Usuario',
  apellidos:        'Demo',
  telefono:         '3000000000',
  fecha_nacimiento: '1990-01-01',
  estado_civil:     'soltero',
  salario_base:     0,

  // ── Préstamos ────────────────────────────────────────────
  prestamos: [],
};

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

        // 🔍 Modo demo
        if (token === 'demo-token-123456789') {
          await new Promise(resolve => setTimeout(resolve, 600));
          setUserData(DATOS_SIMULADOS); // ✅ objeto plano completo, no .user
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
