// BackEnd/Base_Datos_Local/Func_bd/getAdminBasicData.js

import { pool } from '../index.js';

/**
 * Obtiene datos básicos del administrador para el sidebar.
 * Versión simplificada: solo perfil, sin métricas.
 * 
 * @param {number} userId - ID del usuario autenticado
 * @param {number} clienteId - ID del cliente/cooperativa
 * @returns {Promise<Object|null>} Datos básicos del admin
 */
export const getAdminBasicData = async (userId, clienteId) => {
  const [rows] = await pool.execute(
    `
    SELECT
      u.id,
      u.email,
      r.nombre AS rol,
      CONCAT_WS(' ', a.primer_nombre, a.primer_apellido) AS name,
      il.cargo,
      c.razon_social AS cooperativa_nombre
    FROM usuarios AS u
    INNER JOIN roles AS r ON r.id = u.rol_id
    INNER JOIN clientes AS c ON c.id = u.cliente_id
    LEFT JOIN asociados AS a ON a.id = u.asociado_id
    LEFT JOIN informacion_laboral AS il ON il.asociado_id = a.id
    WHERE u.id = ? AND u.cliente_id = ?
    LIMIT 1
    `,
    [userId, clienteId]
  );

  return rows[0] || null;
};