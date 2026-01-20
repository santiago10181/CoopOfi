import { ciudadesOptions, empresasOptions } from '../options/options';

export const infoLaboralFields = {
  id: "info_laboral",
  sectionTitle: "INFORMACIÓN LABORAL",
  fields: [
    {
      componentType: 'select',
      label: "Empresa",
      name: "sol_empresa_id",
      options: empresasOptions,
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Fecha de Ingreso",
      name: "sol_fecha_ing_trabajo",
      type: "date",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Ciudad de Trabajo",
      name: "sol_ciudad_trabajo",
      options: ciudadesOptions,
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Dependencia",
      name: "sol_dependencia",
      type: "text",
      defaultValue: "COMERCIAL",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Profesión",
      name: "sol_profesion",
      type: "text",
      defaultValue: "POLITOLOGA",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Cargo",
      name: "sol_cargo",
      type: "text",
      defaultValue: "EJECUTIVO DE CUENTA",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Teléfono Oficina",
      name: "sol_tel_oficina",
      type: "text",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Extensión",
      name: "sol_ext_tel_oficina",
      type: "number"
    },
    {
      componentType: 'input',
      label: "Correo Empresarial",
      name: "sol_email_oficina",
      type: "email",
      rules: { required: "Requerido" }
    }
  ]
};