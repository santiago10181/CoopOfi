export const referenciasFields = {
  id: "referencias",
  sectionTitle: "REFERENCIAS Y CÓNYUGE",
  fields: [
    // REFERENCIA PERSONAL
    { componentType: 'input', label: "Ref. Personal - Nombre", name: "sol_refp_nombre", type: "text", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Ref. Personal - Teléfono", name: "sol_refp_telefono", type: "number", rules: { required: "Requerido" } },
    { 
      componentType: 'select', 
      label: "Ref. Personal - Parentesco", 
      name: "sol_refp_parentesco", 
      options: [{value: "0", label: "Ninguno"}, {value: "2", label: "Hermano"}, {value: "3", label: "Hijo"}, {value: "4", label: "Madre"}, {value: "5", label: "Padre"}], 
      rules: { required: "Requerido" } 
    },
    { componentType: 'input', label: "Ref. Personal - Ciudad", name: "sol_refp_ciudad", type: "text", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Ref. Personal - Dirección", name: "sol_refp_direccion", type: "text", rules: { required: "Requerido" } },

    // REFERENCIA FAMILIAR
    { componentType: 'input', label: "Ref. Familiar - Nombre", name: "sol_reff_nombre", type: "text", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Ref. Familiar - Teléfono", name: "sol_reff_telefono", type: "number", rules: { required: "Requerido" } },
    { 
      componentType: 'select', 
      label: "Ref. Familiar - Parentesco", 
      name: "sol_reff_parentesco", 
      options: [{value: "0", label: "Ninguno"}, {value: "2", label: "Hermano"}, {value: "3", label: "Hijo"}, {value: "4", label: "Madre"}, {value: "5", label: "Padre"}], 
      rules: { required: "Requerido" } 
    },
    { componentType: 'input', label: "Ref. Familiar - Ciudad", name: "sol_reff_ciudad", type: "text", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Ref. Familiar - Dirección", name: "sol_reff_direccion", type: "text", rules: { required: "Requerido" } },

    // CÓNYUGE
    {
      componentType: 'select',
      label: "Cónyuge - Tipo Doc",
      name: "sol_cony_tipo_doc",
      options: [
        {value: "1", label: "Cédula de Ciudadanía"},
        {value: "3", label: "Cédula de Extranjeria"},
        {value: "4", label: "Pasaporte"}
      ]
    },
    { componentType: 'input', label: "Cónyuge - No. Documento", name: "sol_cony_num_doc", type: "number" },
    { componentType: 'input', label: "Cónyuge - Nombres", name: "sol_cony_nombres", type: "text" },
    { componentType: 'input', label: "Cónyuge - Primer Apellido", name: "sol_cony_apellido1", type: "text" },
    { componentType: 'input', label: "Cónyuge - Segundo Apellido", name: "sol_cony_apellido2", type: "text" },
    { componentType: 'input', label: "Cónyuge - Celular", name: "sol_cony_celular", type: "number" },
    { componentType: 'input', label: "Cónyuge - Tel. Fijo", name: "sol_cony_telefono", type: "number" },
    { componentType: 'input', label: "Cónyuge - Email", name: "sol_cony_email", type: "email" },
    { componentType: 'input', label: "Cónyuge - Empresa", name: "sol_cony_empresa", type: "text" },
    { componentType: 'input', label: "Cónyuge - Dir. Empresa", name: "sol_cony_dir_empresa", type: "text" },
    { componentType: 'input', label: "Cónyuge - Cargo", name: "sol_cony_cargo_empresa", type: "text" }
  ]
};