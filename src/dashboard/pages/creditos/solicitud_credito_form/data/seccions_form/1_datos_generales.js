import { garantiasOptions } from '../options/options.js'; 

export const datosGeneralesFields = {
  id: "datos_generales",
  sectionTitle: "DATOS GENERALES DE LA SOLICITUD",
  fields: [
    {
      componentType: 'select',
      label: "Tipo de Garantía",
      name: "sol_tipo_garantia",
      options: garantiasOptions,
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Línea de Crédito",
      name: "sol_id_linea_credito",
      options: [], 
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Monto solicitado",
      name: "sol_valor_credito",
      type: "number",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Plazo (meses)",
      name: "sol_plazo_credito",
      type: "number",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Tasa de Interés",
      name: "sol_tasa_credito",
      type: "number",
      readOnly: true
    },
    {
      componentType: 'input',
      label: "Número Créditos que Recoge",
      name: "sol_creditos_recoge",
      type: "text"
    }
  ]
};