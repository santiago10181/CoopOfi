export const patrimonioFields = {
  id: "patrimonio",
  sectionTitle: "PATRIMONIO (INMUEBLES Y VEHÍCULOS)",
  fields: [
    // INMUEBLES
    { componentType: 'input', label: "Tipo de Inmueble", name: "sol_tipo_inm", type: "text" },
    { componentType: 'input', label: "Dirección", name: "sol_dir_inm", type: "text" },
    { componentType: 'input', label: "Ciudad", name: "sol_ciudad_inm", type: "text" },
    { componentType: 'input', label: "Barrio", name: "sol_barrio_inm", type: "text" },
    { componentType: 'input', label: "Valor inmueble", name: "sol_valor_inm", type: "text" },
    { componentType: 'input', label: "Valor Hipoteca", name: "sol_hipoteca_inm", type: "text" },
    { componentType: 'input', label: "Saldo Hipoteca", name: "sol_saldo_hipot_inm", type: "text" },
    { componentType: 'input', label: "Entidad Hipoteca", name: "sol_entidad_hipot_inm", type: "text" },

    // VEHICULOS
    { componentType: 'input', label: "Placa", name: "sol_placa_vehiculo", type: "text" },
    { componentType: 'input', label: "Tipo Vehículo", name: "sol_tipo_vehiculo", type: "text" },
    { componentType: 'input', label: "Marca", name: "sol_marca_vehiculo", type: "text" },
    { componentType: 'input', label: "Línea", name: "sol_linea_vehiculo", type: "text" },
    { componentType: 'input', label: "Modelo", name: "sol_modelo_vehiculo", type: "number", min: 0 },
    { componentType: 'input', label: "Valor Vehículo", name: "sol_valor_vehiculo", type: "text" },
    {
      componentType: 'select',
      label: "Pignorado",
      name: "sol_pignora_vehiculo",
      options: [{value: "S", label: "SI"}, {value: "N", label: "NO"}]
    },
    { componentType: 'input', label: "Entidad Pignora", name: "sol_ent_pignora_vehiculo", type: "text" },
    { componentType: 'input', label: "Saldo Crédito", name: "sol_saldo_cred_vehiculo", type: "text" },
    { componentType: 'input', label: "Cuota Crédito", name: "sol_cuota_cred_vehiculo", type: "text" }
  ]
};