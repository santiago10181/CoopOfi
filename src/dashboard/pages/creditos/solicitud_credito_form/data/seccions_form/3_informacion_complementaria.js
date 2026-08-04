import { ciudadesOptions } from '../options/options';

export const infoComplementariaFields = {
  id: "info_complementaria",
  sectionTitle: "INFORMACIÓN COMPLEMENTARIA",
  fields: [
    { componentType: 'input', label: "Dirección Residencia", name: "sol_dir_casa", type: "text", rules: { required: "Requerido" } },
    { componentType: 'select', label: "Ciudad de Residencia", name: "sol_ciudad_casa", options: ciudadesOptions, rules: { required: "Requerido" } },
    { 
      componentType: 'select', label: "Estado Civil", name: "sol_estado_civil", 
      options: [
        { value: "Soltero", label: "Soltero" }, { value: "Casado", label: "Casado" }, 
        { value: "Union Libre", label: "Unión Libre" }, { value: "Divorciado", label: "Divorciado" }, 
        { value: "Separado", label: "Separado" }, { value: "Viudo", label: "Viudo" }
      ], rules: { required: "Requerido" } 
    },
    { componentType: 'input', label: "No. Hijos", name: "sol_num_hijos", type: "number", rules: { required: "Requerido", min: 0 } },
    { componentType: 'input', label: "Personas a cargo", name: "sol_personas_cargo", type: "number", defaultValue: 0, rules: { required: "Requerido", min: 0 } },
    { componentType: 'input', label: "Teléfono", name: "sol_tel_casa", type: "number" },
    { 
      componentType: 'select', label: "Tipo de Vivienda", name: "sol_tipo_vivienda", 
      options: [{ value: "Propia", label: "Propia" }, { value: "Familiar", label: "Familiar" }, { value: "Arrendada", label: "Arrendada" }],
      rules: { required: "Requerido" }
    },
    { componentType: 'input', label: "Estrato", name: "sol_estrato", type: "number", defaultValue: 6, rules: { required: "Requerido", min: 0, max: 6 } },
    { componentType: 'input', label: "Celular", name: "sol_celular", type: "number", readOnly: true },
    { componentType: 'input', label: "Correo Electrónico Personal", name: "sol_email", type: "email", readOnly: true },
    { 
      componentType: 'select', label: "Envio de Correo", name: "sol_entrega_correo", 
      options: [{ value: "F", label: "Física" }, { value: "E", label: "Email" }],
      rules: { required: "Requerido" }
    }
  ]
};