// src/bd/dashboard/getDashboardUserById.js
import { pool } from '../index.js';

export const getDashboardUserById = async (userId) => {
  const [rows] = await pool.execute(
    `
    SELECT
      u.id AS id,
      r.nombre AS rol,
      CASE
        WHEN u.estado = 'Activo' THEN TRUE
        ELSE FALSE
      END AS activo,
      CONCAT_WS(
        ' ',
        a.primer_nombre,
        a.segundo_nombre,
        a.primer_apellido,
        a.segundo_apellido
      ) AS name,
      u.email AS email,
      il.cargo AS cargo
    FROM usuarios AS u
    LEFT JOIN roles AS r
      ON r.id = u.rol_id
    LEFT JOIN asociados AS a
      ON a.id = u.asociado_id
    LEFT JOIN informacion_laboral AS il
      ON il.asociado_id = a.id
    WHERE u.id = ?
    LIMIT 1
    `,
    [userId]
  );

  return rows[0] ?? null;
}; 