import { ciudadesOptions } from '../options/options';

export const infoSolicitanteFields = {
  id: "info_solicitante",
  sectionTitle: "INFORMACIÓN DEL SOLICITANTE",
  fields: [
    {
      componentType: 'input',
      label: "1er Nombre",
      name: "sol_nombre1",
      type: "text",
      defaultValue: "PEPITO",
      readOnly: true
    },
    {
      componentType: 'input',
      label: "2do Nombre",
      name: "sol_nombre2",
      type: "text",
      readOnly: true
    },
    {
      componentType: 'input',
      label: "1er Apellido",
      name: "sol_apellido1",
      type: "text",
      defaultValue: "PEREZ",
      readOnly: true
    },
    {
      componentType: 'input',
      label: "2do Apellido",
      name: "sol_apellido2",
      type: "text",
      readOnly: true
    },
    {
      componentType: 'input',
      label: "Tipo Documento",
      name: "sol_tipo_doc",
      type: "text",
      defaultValue: "Cédula de Ciudadanía",
      readOnly: true
    },
    {
      componentType: 'input',
      label: "No. identificación",
      name: "sol_num_doc",
      type: "text",
      defaultValue: "11111111",
      readOnly: true
    },
    {
      componentType: 'input',
      label: "Fecha Expedición",
      name: "sol_fecha_exp_doc",
      type: "date",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Pais Expedición",
      name: "sol_pais_exp_doc",
      options: [{value: "1", label: "COLOMBIA"}, {value: "21", label: "MÉXICO"}, {value: "123", label: "ARGENTINA"}], // Resumido
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Depto. Expedición",
      name: "sol_dpto_exp_doc",
      options: [{value: "11", label: "BOGOTÁ, D.C."}, {value: "05", label: "ANTIOQUIA"}], // Resumido
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Ciudad Expedición",
      name: "sol_ciudad_exp_doc",
      options: ciudadesOptions,
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Fecha Nacimiento",
      name: "sol_fecha_nac",
      type: "date",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Lugar de Nacimiento",
      name: "sol_ciudad_nac",
      type: "text",
      defaultValue: "BOGOTA",
      rules: { required: "Requerido" }
    }
  ]
};