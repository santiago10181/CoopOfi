import { getAutoFillFormUserById } from "../../../Base_Datos_Local/Func_bd/getDataUserCredit.js";
import { formatDate, mapTipoDocumento, mapEstadoCivil } from "../Fun_End/utils/formats.js";

const safeString = (value) => (value ? String(value) : "");
const safeNumber = (value) => (value !== null && value !== undefined ? value : "");

const DataUserCreditHandler = async (req, res) => {
  const userId = req.user.userId;

  try { 
    const userData = await getAutoFillFormUserById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado", 
        data: null,
      });
    }

    const autoFillData = {
      // Solicitante
      sol_nombre1: safeString(userData.sol_nombre1),
      sol_nombre2: safeString(userData.sol_nombre2),
      sol_apellido1: safeString(userData.sol_apellido1),
      sol_apellido2: safeString(userData.sol_apellido2),
      sol_tipo_doc: mapTipoDocumento(userData.sol_tipo_doc),
      sol_num_doc: safeString(userData.sol_num_doc),
      sol_fecha_exp_doc: formatDate(userData.sol_fecha_exp_doc),
      sol_ciudad_exp_doc: safeString(userData.sol_ciudad_exp_doc),
      sol_fecha_nac: formatDate(userData.sol_fecha_nac),
      sol_ciudad_nac: safeString(userData.sol_ciudad_nac),

      // Complementaria
      sol_dir_casa: safeString(userData.sol_dir_casa),
      sol_ciudad_casa: safeString(userData.sol_ciudad_casa),
      sol_estado_civil: mapEstadoCivil(userData.sol_estado_civil),
      sol_num_hijos: safeNumber(userData.sol_num_hijos),
      sol_personas_cargo: safeNumber(userData.sol_personas_cargo),
      sol_tel_casa: safeString(userData.sol_tel_casa),
      sol_tipo_vivienda: safeString(userData.sol_tipo_vivienda),
      sol_estrato: safeNumber(userData.sol_estrato),
      sol_celular: safeString(userData.sol_celular),
      sol_email: safeString(userData.sol_email),
      sol_entrega_correo: safeString(userData.sol_entrega_correo),

      // Laboral
      sol_empresa_id: safeString(userData.sol_empresa_id),
      sol_fecha_ing_trabajo: formatDate(userData.sol_fecha_ing_trabajo),
      sol_ciudad_trabajo: safeString(userData.sol_ciudad_trabajo),
      sol_dependencia: safeString(userData.sol_dependencia),
      sol_profesion: safeString(userData.sol_profesion),
      sol_cargo: safeString(userData.sol_cargo),
      sol_tel_oficina: safeString(userData.sol_tel_oficina),
      sol_ext_tel_oficina: safeString(userData.sol_ext_tel_oficina),
      sol_email_oficina: safeString(userData.sol_email_oficina),

      // Financiera
      sol_salario: safeNumber(userData.sol_salario),
      sol_honorarios: safeNumber(userData.sol_honorarios),
      sol_otros_ingresos: safeNumber(userData.sol_otros_ingresos),
      sol_otros_ingresos_concepto: safeString(userData.sol_otros_ingresos_concepto),
      sol_tot_ingresos: safeNumber(userData.sol_tot_ingresos),
      sol_gasto_familia: safeNumber(userData.sol_gasto_familia),
      sol_gasto_financiero: safeNumber(userData.sol_gasto_financiero),
      sol_otros_gastos: safeNumber(userData.sol_otros_gastos),
      sol_otros_gastos_concepto: safeString(userData.sol_otros_gastos_concepto),
      sol_tot_egresos: safeNumber(userData.sol_tot_egresos),

      // Referencias
      sol_refp_nombre: safeString(userData.sol_refp_nombre),
      sol_refp_telefono: safeString(userData.sol_refp_telefono),
      sol_refp_parentesco: safeString(userData.sol_refp_parentesco),
      sol_refp_ciudad: safeString(userData.sol_refp_ciudad),
      sol_refp_direccion: safeString(userData.sol_refp_direccion),

      sol_reff_nombre: safeString(userData.sol_reff_nombre),
      sol_reff_telefono: safeString(userData.sol_reff_telefono),
      sol_reff_parentesco: safeString(userData.sol_reff_parentesco),
      sol_reff_ciudad: safeString(userData.sol_reff_ciudad),
      sol_reff_direccion: safeString(userData.sol_reff_direccion),

      // Cónyuge
      sol_cony_tipo_doc: safeString(userData.sol_cony_tipo_doc),
      sol_cony_num_doc: safeString(userData.sol_cony_num_doc),
      sol_cony_nombres: safeString(userData.sol_cony_nombres),
      sol_cony_apellido1: safeString(userData.sol_cony_apellido1),
      sol_cony_apellido2: safeString(userData.sol_cony_apellido2),
      sol_cony_celular: safeString(userData.sol_cony_celular),
      sol_cony_telefono: safeString(userData.sol_cony_telefono),
      sol_cony_email: safeString(userData.sol_cony_email),
      sol_cony_empresa: safeString(userData.sol_cony_empresa),
      sol_cony_dir_empresa: safeString(userData.sol_cony_dir_empresa),
      sol_cony_cargo_empresa: safeString(userData.sol_cony_cargo_empresa),

      // Patrimonio Inmuebles
      sol_tipo_inm: safeString(userData.sol_tipo_inm),
      sol_dir_inm: safeString(userData.sol_dir_inm),
      sol_ciudad_inm: safeString(userData.sol_ciudad_inm),
      sol_barrio_inm: safeString(userData.sol_barrio_inm),
      sol_valor_inm: safeNumber(userData.sol_valor_inm),
      sol_hipoteca_inm: safeNumber(userData.sol_hipoteca_inm),
      sol_saldo_hipot_inm: safeNumber(userData.sol_saldo_hipot_inm),
      sol_entidad_hipot_inm: safeString(userData.sol_entidad_hipot_inm),

      // Patrimonio Vehículos
      sol_placa_vehiculo: safeString(userData.sol_placa_vehiculo),
      sol_tipo_vehiculo: safeString(userData.sol_tipo_vehiculo),
      sol_marca_vehiculo: safeString(userData.sol_marca_vehiculo),
      sol_linea_vehiculo: safeString(userData.sol_linea_vehiculo),
      sol_modelo_vehiculo: safeNumber(userData.sol_modelo_vehiculo),
      sol_valor_vehiculo: safeNumber(userData.sol_valor_vehiculo),
      sol_pignora_vehiculo: safeString(userData.sol_pignora_vehiculo),
      sol_ent_pignora_vehiculo: safeString(userData.sol_ent_pignora_vehiculo),
      sol_saldo_cred_vehiculo: safeNumber(userData.sol_saldo_cred_vehiculo),
      sol_cuota_cred_vehiculo: safeNumber(userData.sol_cuota_cred_vehiculo),

      // Opciones dinámicas
      lineasCredito: userData.lineasCredito || []
    };
    
    return res.status(200).json({
      success: true,
      message: "Datos de usuario para autollenado obtenidos correctamente",
      data: autoFillData,
    });
  } catch (error) {
    console.error("Error en DataUserCreditHandler:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor al obtener los datos del usuario",
      data: null,
    });
  }
};

export default DataUserCreditHandler;