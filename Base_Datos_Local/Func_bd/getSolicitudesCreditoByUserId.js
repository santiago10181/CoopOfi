// Base_Datos_Local/Func_bd/getSolicitudesCreditoByUserId.js
import {pool} from '../index.js';

export const getSolicitudesCreditoByUserId = async (userId) => {
  const query = `
        SELECT
      sc.id,
      tc.nombre AS detalle_credito,
      sc.monto_solicitado AS valor,
      sc.plazo_solicitado_meses AS plazo_meses,
      sc.estado,
      sc.fecha_creacion AS fecha_solicitud,
      (
        SELECT sch.fecha_cambio
        FROM solicitudes_credito_historial sch
        WHERE sch.solicitud_creditoid = sc.id
        ORDER BY sch.fecha_cambio DESC
        LIMIT 1
      ) AS ultima_actualizacion
    FROM usuarios u
    INNER JOIN solicitudes_credito sc
      ON sc.asociadoid = u.asociado_id
    INNER JOIN tipos_credito tc
      ON tc.id = sc.tipo_creditoid
    WHERE u.id = ?
    ORDER BY sc.fecha_creacion DESC;
  `;

  const [rows] = await pool.query(query, [userId]);
  return rows;
};