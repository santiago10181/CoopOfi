import { pool } from '../index.js';

export const createSolicitudConvenio = async (userId, formData) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const convenioId = Number(formData.convenioid);
    const descripcion = formData.description?.trim();

    if (!Number.isInteger(convenioId) || convenioId <= 0) {
      throw new Error('Debes seleccionar un auxilio/convenio válido.');
    }

    if (!descripcion) {
      throw new Error('La descripción de la solicitud es obligatoria.');
    }

    // Consulta corregida: snake_case (cliente_id, asociado_id)
    const [userRows] = await connection.execute(
      `SELECT
        u.asociado_id,
        a.cliente_id
      FROM usuarios u
      INNER JOIN asociados a
        ON a.id = u.asociado_id
      WHERE u.id = ?`,
      [userId]
    );

    if (userRows.length === 0 || !userRows[0].asociado_id) {
      throw new Error('El usuario no tiene un asociado vinculado.');
    }

    const { asociado_id, cliente_id } = userRows[0];

    // Consulta corregida: snake_case (cliente_id, esta_activo)
    const [convenioRows] = await connection.execute(
      `SELECT
        id,
        nombre
      FROM convenios
      WHERE id = ?
        AND cliente_id = ?
        AND esta_activo = 1`,
      [convenioId, cliente_id]
    );

    if (convenioRows.length === 0) {
      throw new Error(
        'El auxilio/convenio seleccionado no existe, está inactivo o no pertenece a tu organización.'
      );
    }

    const convenio = convenioRows[0];

    // INSERT corregido: Tabla solicitudes_convenio y columnas en snake_case
    const [solicitudResult] = await connection.execute(
      `INSERT INTO solicitudes_convenio (
        cliente_id,
        asociado_id,
        convenio_id,
        descripcion_solicitud,
        archivo_adjunto_url,
        estado
      )
      VALUES (?, ?, ?, ?, NULL, 'Radicada')`,
      [
        cliente_id,
        asociado_id,
        convenioId,
        descripcion,
      ]
    );

    const solicitudId = solicitudResult.insertId;

    // INSERT corregido: Tabla solicitudes_convenio_historial y columnas en snake_case
    await connection.execute(
      `INSERT INTO solicitudes_convenio_historial (
        solicitud_convenio_id,
        usuario_id,
        estado_anterior,
        estado_nuevo,
        comentario
      )
      VALUES (?, ?, NULL, 'Radicada', ?)`,
      [
        solicitudId,
        userId,
        'Solicitud creada por el asociado.',
      ]
    );

    await connection.commit();

    // Retorno ajustado para mantener consistencia con la BD
    return {
      id: solicitudId,
      cliente_id,
      asociado_id,
      convenio_id: convenioId,
      auxilioConvenio: convenio.nombre,
      descripcion,
      archivo_adjunto_url: null,
      estado: 'Radicada',
    };
  } catch (error) {
    await connection.rollback();
    console.error('Error en createSolicitudConvenio:', error);
    throw error;
  } finally {
    connection.release();
  }
};