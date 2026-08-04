import { pool } from '../index.js';

export const getConveniosDisponiblesByUserId = async (userId) => {
  // 1. Confirmamos que el usuario existe, está asociado
  // y obtenemos la organización a la que pertenece.
  const [userRows] = await pool.execute(
    `SELECT
      u.asociado_id,
      a.cliente_id
    FROM usuarios u
    INNER JOIN asociados a
      ON a.id = u.asociado_id
    WHERE u.id = ?`,
    [userId]
  );

  if (userRows.length === 0) {
    throw new Error('El usuario autenticado no existe o no tiene un asociado vinculado.');
  }

  const { asociado_id: asociadoId, cliente_id: clienteId } = userRows[0];

  if (!asociadoId || !clienteId) {
    throw new Error('El usuario no tiene una organización asociada.');
  }

  // 2. Traemos SOLAMENTE convenios activos de esa organización.
  const [convenios] = await pool.execute(
    `SELECT
      id,
      codigo,
      nombre,
      descripcion,
      tipo,
      requiere_soporte AS requiereSoporte
    FROM convenios
    WHERE cliente_id = ?
      AND esta_activo = 1
    ORDER BY tipo ASC, nombre ASC`,
    [clienteId]
  );

  return convenios;
};