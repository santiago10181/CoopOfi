// BackEnd/Base_Datos_Local/Func_bd/getAdminDashboardData.js

import { pool } from '../index.js';

/**
 * Obtiene los datos completos para el dashboard administrativo.
 * 
 * Esta función implementa el patrón multi-tenant: filtra todos los datos
 * por el cliente_id del administrador autenticado, garantizando aislamiento
 * de datos entre diferentes cooperativas/fondos.
 * 
 * @param {number} userId - ID del usuario administrador autenticado
 * @param {number} clienteId - ID del cliente/cooperativa al que pertenece el admin
 * @returns {Promise<Object>} Datos del dashboard con métricas y perfil
 */
export const getAdminDashboardData = async (userId, clienteId) => {
  // 1. Obtenemos el perfil del administrador
  const [adminRows] = await pool.execute(
    `
    SELECT
      u.id AS id,
      u.email AS email,
      r.nombre AS rol,
      CASE WHEN u.estado = 'Activo' THEN TRUE ELSE FALSE END AS activo,
      CONCAT_WS(' ', a.primer_nombre, a.segundo_nombre, a.primer_apellido, a.segundo_apellido) AS name,
      il.cargo AS cargo,
      c.razon_social AS cooperativa_nombre,
      c.logo_url AS cooperativa_logo
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

  if (adminRows.length === 0) return null;
  const admin = adminRows[0];

  // 2. Métricas de solicitudes de crédito (filtradas por cliente_id)
  const [creditMetrics] = await pool.execute(
    `
    SELECT
      COUNT(*) AS total_solicitudes,
      SUM(CASE WHEN estado = 'Radicada' THEN 1 ELSE 0 END) AS pendientes,
      SUM(CASE WHEN estado = 'EnRevision' THEN 1 ELSE 0 END) AS en_revision,
      SUM(CASE WHEN estado = 'Aprobada' THEN 1 ELSE 0 END) AS aprobadas,
      SUM(CASE WHEN estado = 'Rechazada' THEN 1 ELSE 0 END) AS rechazadas,
      SUM(CASE WHEN estado = 'Devuelta' THEN 1 ELSE 0 END) AS devueltas,
      SUM(monto_solicitado) AS monto_total_solicitado,
      SUM(CASE WHEN estado = 'Aprobada' THEN monto_aprobado ELSE 0 END) AS monto_total_aprobado
    FROM solicitudes_credito
    WHERE cliente_id = ?
    `,
    [clienteId]
  );

  // 3. Métricas de solicitudes de convenio (filtradas por cliente_id)
  const [agreementMetrics] = await pool.execute(
    `
    SELECT
      COUNT(*) AS total_solicitudes,
      SUM(CASE WHEN estado = 'Radicada' THEN 1 ELSE 0 END) AS pendientes,
      SUM(CASE WHEN estado = 'EnRevision' THEN 1 ELSE 0 END) AS en_revision,
      SUM(CASE WHEN estado = 'Aprobada' THEN 1 ELSE 0 END) AS aprobadas,
      SUM(CASE WHEN estado = 'Rechazada' THEN 1 ELSE 0 END) AS rechazadas,
      SUM(CASE WHEN estado = 'Devuelta' THEN 1 ELSE 0 END) AS devueltas
    FROM solicitudes_convenio
    WHERE cliente_id = ?
    `,
    [clienteId]
  );

  // 4. Solicitudes recientes (últimas 5 de cada tipo)
  const [recentCredits] = await pool.execute(
    `
    SELECT
      sc.id,
      sc.estado,
      sc.monto_solicitado,
      sc.fecha_creacion,
      tc.nombre AS tipo_credito,
      CONCAT_WS(' ', a.primer_nombre, a.primer_apellido) AS asociado_nombre,
      a.numero_identificacion AS asociado_identificacion
    FROM solicitudes_credito AS sc
    INNER JOIN tipos_credito AS tc ON tc.id = sc.tipo_credito_id
    INNER JOIN asociados AS a ON a.id = sc.asociado_id
    WHERE sc.cliente_id = ?
    ORDER BY sc.fecha_creacion DESC
    LIMIT 5
    `,
    [clienteId]
  );

  const [recentAgreements] = await pool.execute(
    `
    SELECT
      sco.id,
      sco.estado,
      sco.descripcion_solicitud,
      sco.fecha_creacion,
      c.nombre AS convenio_nombre,
      CONCAT_WS(' ', a.primer_nombre, a.primer_apellido) AS asociado_nombre,
      a.numero_identificacion AS asociado_identificacion
    FROM solicitudes_convenio AS sco
    INNER JOIN convenios AS c ON c.id = sco.convenio_id
    INNER JOIN asociados AS a ON a.id = sco.asociado_id
    WHERE sco.cliente_id = ?
    ORDER BY sco.fecha_creacion DESC
    LIMIT 5
    `,
    [clienteId]
  );

  // 5. Total de asociados activos del cliente
  const [associatesCount] = await pool.execute(
    `
    SELECT COUNT(*) AS total
    FROM asociados
    WHERE cliente_id = ? AND estado = 'Activo'
    `,
    [clienteId]
  );

  // Retornamos toda la estructura consolidada
  return {
    admin: {
      id: admin.id,
      email: admin.email,
      rol: admin.rol,
      activo: admin.activo,
      name: admin.name,
      cargo: admin.cargo,
      cooperativa: {
        nombre: admin.cooperativa_nombre,
        logo: admin.cooperativa_logo,
      },
    },
    metrics: {
      creditos: {
        total: creditMetrics[0].total_solicitudes,
        pendientes: creditMetrics[0].pendientes,
        enRevision: creditMetrics[0].en_revision,
        aprobadas: creditMetrics[0].aprobadas,
        rechazadas: creditMetrics[0].rechazadas,
        devueltas: creditMetrics[0].devueltas,
        montoTotalSolicitado: creditMetrics[0].monto_total_solicitado || 0,
        montoTotalAprobado: creditMetrics[0].monto_total_aprobado || 0,
      },
      convenios: {
        total: agreementMetrics[0].total_solicitudes,
        pendientes: agreementMetrics[0].pendientes,
        enRevision: agreementMetrics[0].en_revision,
        aprobadas: agreementMetrics[0].aprobadas,
        rechazadas: agreementMetrics[0].rechazadas,
        devueltas: agreementMetrics[0].devueltas,
      },
      asociados: {
        activos: associatesCount[0].total,
      },
    },
    recentActivity: {
      creditos: recentCredits,
      convenios: recentAgreements,
    },
  };
};