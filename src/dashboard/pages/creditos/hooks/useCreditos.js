// src/dashboard/pages/creditos/hooks/useCreditos.js
import { useState, useEffect } from 'react';

const CREDITOS_SIMULADOS = [
  { id: 46, tipo_credito: "Vivienda",       estado: "en_estudio", monto_solicitado: 10000000, monto_aprobado: null,      fecha_solicitud: "2026-02-10", cuotas_pendientes: 0  },
  { id: 36, tipo_credito: "Vacacional",     estado: "en_estudio", monto_solicitado: 4000000,  monto_aprobado: null,      fecha_solicitud: "2026-02-01", cuotas_pendientes: 0  },
  { id: 35, tipo_credito: "Libranza",       estado: "aprobado",   monto_solicitado: 7000000,  monto_aprobado: 6800000,   fecha_solicitud: "2026-01-05", cuotas_pendientes: 16 },
];

export const useCreditos = () => {
  const [creditos, setCreditos]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState('');

  useEffect(() => {
    const fetchCreditos = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          setError('No hay sesión activa');
          return;
        }

        // Modo simulado
        if (token === 'demo-token-123456789') {
          await new Promise(resolve => setTimeout(resolve, 600));
          setCreditos(CREDITOS_SIMULADOS);
          return;
        }

        // Fetch real
        const response = await fetch('http://localhost:3000/api/creditos', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const result = await response.json();

        if (response.ok) {
          setCreditos(result.prestamos); // ← {total, prestamos[]}
          console.log(result);
          
        } else {
          setError(result.error || 'Error al cargar créditos');
        }

      } catch (err) {
        setError('Sin conexión al servidor');
      } finally {
        setLoading(false);
      }
    };

    fetchCreditos();
  }, []);

  return { creditos, loading, error };
};
