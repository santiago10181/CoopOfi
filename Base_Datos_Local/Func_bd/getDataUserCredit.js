import { pool } from '../index.js'; 

export const getAutoFillFormUserById = async (userId) => {
  const [rows] = await pool.execute(
    `
    SELECT
      u.id AS user_id,
      u.asociado_id AS asociado_id,
      a.cliente_id AS cliente_id,

      -- Información del solicitante
      a.primer_nombre AS sol_nombre1,
      a.segundo_nombre AS sol_nombre2,
      a.primer_apellido AS sol_apellido1,
      a.segundo_apellido AS sol_apellido2,
      a.tipo_identificacion AS sol_tipo_doc,
      a.numero_identificacion AS sol_num_doc,
      a.fecha_expedicion AS sol_fecha_exp_doc, 
      a.pais_expedicion AS sol_pais_exp_doc,
      a.dpto_expedicion AS sol_dpto_exp_doc,
      a.lugar_expedicion AS sol_ciudad_exp_doc,
      a.fecha_nacimiento AS sol_fecha_nac,
      a.ciudad_nacimiento AS sol_ciudad_nac,

      -- Información complementaria
      a.direccion_residencia AS sol_dir_casa,
      a.ciudad_residencia AS sol_ciudad_casa,
      a.estado_civil AS sol_estado_civil,
      a.celular AS sol_celular,
      a.telefono_fijo AS sol_tel_casa,
      a.autoriza_correo AS sol_entrega_correo,
      a.tipo_vivienda AS sol_tipo_vivienda,
      a.estrato AS sol_estrato,
      a.num_hijos AS sol_num_hijos,
      a.personas_cargo AS sol_personas_cargo,
      a.correo_personal AS sol_email,

      -- Información laboral
      il.nombre_empresa AS sol_empresa_id,
      il.fecha_ingreso AS sol_fecha_ing_trabajo,
      il.ciudad_trabajo AS sol_ciudad_trabajo,
      il.dependencia AS sol_dependencia,
      il.profesion AS sol_profesion,
      il.cargo AS sol_cargo,
      il.telefono_oficina AS sol_tel_oficina,
      il.extension AS sol_ext_tel_oficina,
      il.correo_corporativo AS sol_email_oficina,

      -- Información financiera (Ingresos y Egresos completos)
      inf.salario_mensual AS sol_salario,
      inf.comisiones_primas AS sol_honorarios,
      inf.otros_ingresos AS sol_otros_ingresos,
      inf.detalle_otros_ingresos AS sol_otros_ingresos_concepto,
      inf.total_ingresos_mensuales AS sol_tot_ingresos,
      inf.gasto_familia AS sol_gasto_familia,
      inf.gasto_financiero AS sol_gasto_financiero,
      inf.otros_gastos AS sol_otros_gastos,
      inf.detalle_otros_gastos AS sol_otros_gastos_concepto,
      inf.total_egresos AS sol_tot_egresos,

      -- Referencias
      rp.nombre_completo AS sol_refp_nombre,
      rp.telefono AS sol_refp_telefono,
      rp.parentesco AS sol_refp_parentesco,
      rp.ciudad AS sol_refp_ciudad,
      rp.direccion AS sol_refp_direccion,

      rf.nombre_completo AS sol_reff_nombre,
      rf.telefono AS sol_reff_telefono,
      rf.parentesco AS sol_reff_parentesco,
      rf.ciudad AS sol_reff_ciudad,
      rf.direccion AS sol_reff_direccion,

      -- Cónyuge
      c.tipo_identificacion AS sol_cony_tipo_doc,
      c.numero_identificacion AS sol_cony_num_doc,
      c.nombres AS sol_cony_nombres,
      c.primer_apellido AS sol_cony_apellido1,
      c.segundo_apellido AS sol_cony_apellido2,
      c.celular AS sol_cony_celular,
      c.telefono_fijo AS sol_cony_telefono,
      c.email AS sol_cony_email,
      c.empresa AS sol_cony_empresa,
      c.direccion_empresa AS sol_cony_dir_empresa,
      c.cargo AS sol_cony_cargo_empresa,

      -- Patrimonios
      pi.tipo_inmueble AS sol_tipo_inm,
      pi.direccion AS sol_dir_inm,
      pi.ciudad AS sol_ciudad_inm,
      pi.barrio AS sol_barrio_inm,
      pi.valor AS sol_valor_inm,
      pi.valor_hipoteca AS sol_hipoteca_inm,
      pi.saldo_hipoteca AS sol_saldo_hipot_inm,
      pi.entidad_hipoteca AS sol_entidad_hipot_inm,

      pv.placa AS sol_placa_vehiculo,
      pv.tipo_vehiculo AS sol_tipo_vehiculo,
      pv.marca AS sol_marca_vehiculo,
      pv.linea AS sol_linea_vehiculo,
      pv.modelo AS sol_modelo_vehiculo,
      pv.valor AS sol_valor_vehiculo,
      pv.pignorado AS sol_pignora_vehiculo,
      pv.entidad_pignora AS sol_ent_pignora_vehiculo,
      pv.saldo_credito AS sol_saldo_cred_vehiculo,
      pv.cuota_credito AS sol_cuota_cred_vehiculo,

      -- Líneas de crédito dinámicas
      (
        SELECT JSON_ARRAYAGG(JSON_OBJECT('value', tc.id, 'label', tc.nombre))
        FROM tipos_credito tc 
        WHERE tc.cliente_id = a.cliente_id AND tc.esta_activo = 1
      ) AS lineasCredito

    FROM usuarios AS u
    LEFT JOIN asociados AS a ON a.id = u.asociado_id
    LEFT JOIN informacion_laboral AS il ON il.asociado_id = a.id
    LEFT JOIN informacion_financiera AS inf ON inf.asociado_id = a.id
    LEFT JOIN referencias AS rp ON rp.asociado_id = a.id AND rp.tipo_referencia = 'Personal'
    LEFT JOIN referencias AS rf ON rf.asociado_id = a.id AND rf.tipo_referencia = 'Familiar'
    LEFT JOIN conyuges AS c ON c.asociado_id = a.id
    LEFT JOIN patrimonio_inmuebles AS pi ON pi.asociado_id = a.id
    LEFT JOIN patrimonio_vehiculos AS pv ON pv.asociado_id = a.id
    WHERE u.id = ?
    LIMIT 1
    `,
    [userId]
  );

  return rows[0] ?? null;
};