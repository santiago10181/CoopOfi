export const infoFinancieraFields = {
  id: "info_financiera",
  sectionTitle: "INFORMACIÓN FINANCIERA",
  fields: [
    { componentType: 'divider', label: 'Ingresos Mensuales' },
    { componentType: 'input', label: "Salarios", name: "sol_salario", type: "number", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Comisiones/Prima Téc./Auxilios", name: "sol_honorarios", type: "number", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Otros Ingresos", name: "sol_otros_ingresos", type: "number", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Concepto Otros Ingresos", name: "sol_otros_ingresos_concepto", type: "text" },
    { componentType: 'input', label: "Total Ingresos", name: "sol_tot_ingresos", type: "number", readOnly: true },
    
    { componentType: 'divider', label: 'Egresos Mensuales' },
    { componentType: 'input', label: "Gastos Familiares", name: "sol_gasto_familia", type: "number", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Gastos Financieros", name: "sol_gasto_financiero", type: "number", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Otros Gastos", name: "sol_otros_gastos", type: "number", rules: { required: "Requerido" } },
    { componentType: 'input', label: "Concepto Otros Gastos", name: "sol_otros_gastos_concepto", type: "text" },
    { componentType: 'input', label: "Total Egresos", name: "sol_tot_egresos", type: "number", readOnly: true }
  ]
};