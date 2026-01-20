import { ciudadesOptions } from '../options/options';

export const infoComplementariaFields = {
  id: "info_complementaria",
  sectionTitle: "INFORMACIÓN COMPLEMENTARIA",
  fields: [
    {
      componentType: 'input',
      label: "Dirección Residencia",
      name: "sol_dir_casa",
      type: "text",
      defaultValue: "CRA 11 # 11-11",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Ciudad de Residencia",
      name: "sol_ciudad_casa",
      options: ciudadesOptions,
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Estado Civil",
      name: "sol_estado_civil",
      options: [
        { value: "1", label: "Soltero" },
        { value: "2", label: "Casado" },
        { value: "3", label: "Unión Libre" },
        { value: "4", label: "Divorciado" },
        { value: "5", label: "Separado" },
        { value: "6", label: "Viudo" }
      ],
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "No. Hijos",
      name: "sol_num_hijos",
      type: "number",
      rules: { required: "Requerido", min: 0 }
    },
    {
      componentType: 'input',
      label: "Personas a cargo",
      name: "sol_personas_cargo",
      type: "number",
      defaultValue: 0,
      rules: { required: "Requerido", min: 0 }
    },
    {
      componentType: 'input',
      label: "Teléfono",
      name: "sol_tel_casa",
      type: "number"
    },
    {
      componentType: 'select',
      label: "Tipo de Vivienda",
      name: "sol_tipo_vivienda",
      options: [
        { value: "P", label: "Propia" },
        { value: "F", label: "Familiar" },
        { value: "A", label: "Arrendada" }
      ]
    },
    {
      componentType: 'input',
      label: "Estrato",
      name: "sol_estrato",
      type: "number",
      defaultValue: 6,
      rules: { required: "Requerido", min: 0, max: 6 }
    },
    {
      componentType: 'input',
      label: "Celular",
      name: "sol_celular",
      type: "number",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Correo Electrónico Personal",
      name: "sol_email",
      type: "email",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'select',
      label: "Envio de Correo",
      name: "sol_entrega_correo",
      options: [
        { value: "F", label: "Física" },
        { value: "E", label: "Email" }
      ],
      rules: { required: "Requerido" }
    }
  ]
};