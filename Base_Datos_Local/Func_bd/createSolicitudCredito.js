import { pool } from "../index.js"; 

export const createSolicitudCredito = async (userId, formData) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1. Obtenemos el asociado_id y cliente_id
    const [userRows] = await connection.execute(
      `SELECT u.asociado_id, a.cliente_id 
       FROM usuarios u 
       JOIN asociados a ON u.asociado_id = a.id 
       WHERE u.id = ?`,
      [userId]
    );

    if (userRows.length === 0) {
      throw new Error("El usuario no tiene un asociado vinculado.");
    }

    const { asociado_id, cliente_id } = userRows[0];

    // 2. INSERT en solicitudes_credito
    const [solResult] = await connection.execute(
      `INSERT INTO solicitudes_credito 
        (cliente_id, asociado_id, tipo_credito_id, tipo_garantia, monto_solicitado, plazo_solicitado_meses, tasa_interes_informada, numero_creditos_recoge, origen_fondos, archivo_adjunto_url, estado) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Radicada')`,
      [
        cliente_id,
        asociado_id,
        formData.sol_id_linea_credito || null,
        formData.sol_tipo_garantia || null,
        formData.sol_valor_credito || 0,
        formData.sol_plazo_credito || 0,
        formData.sol_tasa_credito || 0,
        formData.sol_creditos_recoge || null,
        formData.sol_origen_fondos || "",
        formData.archivo_adjunto || null,
      ]
    );

    const solicitudId = solResult.insertId;

    // 3. UPSERT en asociados
    await connection.execute(
      `INSERT INTO asociados 
        (id, cliente_id, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, numero_identificacion, fecha_nacimiento, direccion_residencia, ciudad_residencia, estado_civil, celular, correo_personal)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
        primer_nombre=VALUES(primer_nombre), segundo_nombre=VALUES(segundo_nombre), 
        primer_apellido=VALUES(primer_apellido), segundo_apellido=VALUES(segundo_apellido),
        fecha_nacimiento=VALUES(fecha_nacimiento), direccion_residencia=VALUES(direccion_residencia),
        ciudad_residencia=VALUES(ciudad_residencia), estado_civil=VALUES(estado_civil),
        celular=VALUES(celular), correo_personal=VALUES(correo_personal)`,
      [
        asociado_id,
        cliente_id, 
        formData.sol_nombre1 || "", formData.sol_nombre2 || "",
        formData.sol_apellido1 || "", formData.sol_apellido2 || "",
        formData.sol_num_doc || "", formData.sol_fecha_nac || null,
        formData.sol_dir_casa || "", formData.sol_ciudad_casa || "",
        formData.sol_estado_civil || null, formData.sol_celular || "",
        formData.sol_email || ""
      ]
    );

    // 4. UPSERT en informacion_laboral
    await connection.execute(
      `INSERT INTO informacion_laboral 
        (asociado_id, nombre_empresa, fecha_ingreso, ciudad_trabajo, dependencia, cargo, telefono_oficina, extension, correo_corporativo)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
        nombre_empresa=VALUES(nombre_empresa), fecha_ingreso=VALUES(fecha_ingreso),
        ciudad_trabajo=VALUES(ciudad_trabajo), dependencia=VALUES(dependencia), 
        cargo=VALUES(cargo), telefono_oficina=VALUES(telefono_oficina), extension=VALUES(extension),
        correo_corporativo=VALUES(correo_corporativo)`,
      [
        asociado_id,
        formData.sol_empresa_id || "", formData.sol_fecha_ing_trabajo || null,
        formData.sol_ciudad_trabajo || "", formData.sol_dependencia || "",
        formData.sol_cargo || "",
        formData.sol_tel_oficina || "", formData.sol_ext_tel_oficina || "",
        formData.sol_email_oficina || ""
      ]
    );

    // 5. UPSERT en informacion_financiera
    await connection.execute(
      `INSERT INTO informacion_financiera 
        (asociado_id, salario_mensual, otros_ingresos, detalle_otros_ingresos, total_ingresos_mensuales, egresos_mensuales)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
        salario_mensual=VALUES(salario_mensual), otros_ingresos=VALUES(otros_ingresos),
        detalle_otros_ingresos=VALUES(detalle_otros_ingresos),
        total_ingresos_mensuales=VALUES(total_ingresos_mensuales), egresos_mensuales=VALUES(egresos_mensuales)`,
      [
        asociado_id,
        formData.sol_salario || 0, 
        formData.sol_otros_ingresos || 0, formData.sol_otros_ingresos_concepto || "",
        formData.sol_tot_ingresos || 0, formData.sol_tot_egresos || 0
      ]
    );

    // 6. UPSERT en conyuges
    if (formData.sol_cony_num_doc) {
      await connection.execute(
        `INSERT INTO conyuges 
          (asociado_id, tipo_identificacion, numero_identificacion, nombres, primer_apellido, segundo_apellido, celular, telefono_fijo, email, empresa, direccion_empresa, cargo)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE 
          tipo_identificacion=VALUES(tipo_identificacion), nombres=VALUES(nombres),
          primer_apellido=VALUES(primer_apellido), segundo_apellido=VALUES(segundo_apellido),
          celular=VALUES(celular), telefono_fijo=VALUES(telefono_fijo), email=VALUES(email),
          empresa=VALUES(empresa), direccion_empresa=VALUES(direccion_empresa), cargo=VALUES(cargo)`,
        [
          asociado_id, formData.sol_cony_tipo_doc || "CC", formData.sol_cony_num_doc,
          formData.sol_cony_nombres || "", formData.sol_cony_apellido1 || "",
          formData.sol_cony_apellido2 || "", formData.sol_cony_celular || "",
          formData.sol_cony_telefono || "", formData.sol_cony_email || "",
          formData.sol_cony_empresa || "", formData.sol_cony_dir_empresa || "",
          formData.sol_cony_cargo_empresa || ""
        ]
      );
    }

    // 7. Manejo de Referencias (Borrar y reinsertar para mantener simplicidad)
    await connection.execute(`DELETE FROM referencias WHERE asociado_id = ?`, [asociado_id]);
    
    if (formData.sol_refp_nombre) {
      await connection.execute(
        `INSERT INTO referencias (asociado_id, tipo_referencia, nombre_completo, telefono, parentesco, ciudad, direccion) 
         VALUES (?, 'Personal', ?, ?, ?, ?, ?)`,
        [asociado_id, formData.sol_refp_nombre, formData.sol_refp_telefono || "", formData.sol_refp_parentesco || "", formData.sol_refp_ciudad || "", formData.sol_refp_direccion || ""]
      );
    }
    if (formData.sol_reff_nombre) {
      await connection.execute(
        `INSERT INTO referencias (asociado_id, tipo_referencia, nombre_completo, telefono, parentesco, ciudad, direccion) 
         VALUES (?, 'Familiar', ?, ?, ?, ?, ?)`,
        [asociado_id, formData.sol_reff_nombre, formData.sol_reff_telefono || "", formData.sol_reff_parentesco || "", formData.sol_reff_ciudad || "", formData.sol_reff_direccion || ""]
      );
    }

    // 8. UPSERT en patrimonio_inmuebles
    await connection.execute(
      `INSERT INTO patrimonio_inmuebles 
        (asociado_id, tipo_inmueble, direccion, ciudad, barrio, valor, valor_hipoteca, saldo_hipoteca, entidad_hipoteca)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
        tipo_inmueble=VALUES(tipo_inmueble), direccion=VALUES(direccion), ciudad=VALUES(ciudad),
        barrio=VALUES(barrio), valor=VALUES(valor), valor_hipoteca=VALUES(valor_hipoteca),
        saldo_hipoteca=VALUES(saldo_hipoteca), entidad_hipoteca=VALUES(entidad_hipoteca)`,
      [
        asociado_id, 
        formData.sol_tipo_inm || "", formData.sol_dir_inm || "", formData.sol_ciudad_inm || "", 
        formData.sol_barrio_inm || "", formData.sol_valor_inm || 0, formData.sol_hipoteca_inm || 0, 
        formData.sol_saldo_hipot_inm || 0, formData.sol_entidad_hipot_inm || ""
      ]
    );

    // 9. UPSERT en patrimonio_vehiculos
    await connection.execute(
      `INSERT INTO patrimonio_vehiculos 
        (asociado_id, placa, tipo_vehiculo, marca, linea, modelo, valor, pignorado, entidad_pignora, saldo_credito, cuota_credito)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
        placa=VALUES(placa), tipo_vehiculo=VALUES(tipo_vehiculo), marca=VALUES(marca), linea=VALUES(linea),
        modelo=VALUES(modelo), valor=VALUES(valor), pignorado=VALUES(pignorado), entidad_pignora=VALUES(entidad_pignora),
        saldo_credito=VALUES(saldo_credito), cuota_credito=VALUES(cuota_credito)`,
      [
        asociado_id, 
        formData.sol_placa_vehiculo || "", formData.sol_tipo_vehiculo || "", formData.sol_marca_vehiculo || "", 
        formData.sol_linea_vehiculo || "", formData.sol_modelo_vehiculo || 0, formData.sol_valor_vehiculo || 0, 
        formData.sol_pignora_vehiculo || 'N', formData.sol_ent_pignora_vehiculo || "", 
        formData.sol_saldo_cred_vehiculo || 0, formData.sol_cuota_cred_vehiculo || 0
      ]
    );

    await connection.commit(); 

    return {
      id: solicitudId,
      cliente_id: cliente_id,
      asociado_id: asociado_id,
      estado: 'Radicada',
      message: "Solicitud y perfiles actualizados correctamente"
    };

  } catch (error) {
    await connection.rollback(); 
    console.error("Error en transacción createSolicitudCredito:", error);
    throw error; 
  } finally {
    connection.release(); 
  }
};