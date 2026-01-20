export const infoFinancieraFields = {
  id: "info_financiera",
  sectionTitle: "INFORMACIÓN FINANCIERA",
  fields: [
    // INGRESOS
    {
      componentType: 'input',
      label: "Salarios",
      name: "sol_salario",
      type: "text",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Comisiones/Prima Téc./Auxilios",
      name: "sol_honorarios",
      type: "text",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Otros Ingresos",
      name: "sol_otros_ingresos",
      type: "text",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Concepto Otros Ingresos",
      name: "sol_otros_ingresos_concepto",
      type: "text"
    },
    {
      componentType: 'input',
      label: "Total Ingresos",
      name: "sol_tot_ingresos",
      type: "text",
      readOnly: true
    },
    // EGRESOS
    {
      componentType: 'input',
      label: "Gastos Familiares",
      name: "sol_gasto_familia",
      type: "text",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Gastos Financieros",
      name: "sol_gasto_financiero",
      type: "text",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Otros Gastos",
      name: "sol_otros_gastos",
      type: "text",
      rules: { required: "Requerido" }
    },
    {
      componentType: 'input',
      label: "Concepto Otros Gastos",
      name: "sol_otros_gastos_concepto",
      type: "text"
    },
    {
      componentType: 'input',
      label: "Total Egresos",
      name: "sol_tot_egresos",
      type: "text",
      readOnly: true
    }
  ]
};