import { pool } from '../index.js';

export const getDashboardUserById = async (userId) => {
  // 1. Obtenemos los datos del usuario
  const [userRows] = await pool.execute(
    `
    SELECT
      u.id AS id,
      r.nombre AS rol,
      CASE WHEN u.estado = 'Activo' THEN TRUE ELSE FALSE END AS activo,
      CONCAT_WS(' ', a.primer_nombre, a.segundo_nombre, a.primer_apellido, a.segundo_apellido) AS name,
      u.email AS email,
      il.cargo AS cargo
    FROM usuarios AS u
    LEFT JOIN roles AS r ON r.id = u.rol_id
    LEFT JOIN asociados AS a ON a.id = u.asociado_id
    LEFT JOIN informacion_laboral AS il ON il.asociado_id = a.id
    WHERE u.id = ?
    LIMIT 1
    `,
    [userId]
  );

  if (userRows.length === 0) return null;
  const user = userRows[0];

  // 2. Obtenemos los préstamos asociados a ese usuario
  const [prestamos] = await pool.execute(
    `
    SELECT id, tipo_credito_id, monto_solicitado, estado, fecha_creacion
    FROM solicitudes_credito
    WHERE asociado_id = (SELECT asociado_id FROM usuarios WHERE id = ?)
    ORDER BY fecha_creacion DESC
    `,
    [userId]
  );

  // 3. Retornamos ambos
  return { ...user, prestamos: prestamos ?? [] };
};