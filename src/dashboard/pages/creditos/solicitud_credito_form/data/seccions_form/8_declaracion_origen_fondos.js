export const declaracionFields = {
  id: "declaracion_fondos",
  sectionTitle: "DECLARACIÓN DE ORIGEN DE FONDOS",
  fields: [
    {
      componentType: 'input',
      label: "Descripción origen de fondos (Ocupación, oficio, actividad)",
      name: "sol_origen_fondos",
      type: "text",
      placeholder: "Ingrese una descripción breve",
      // rules: { required: "Requerido" },
      className: "md:col-span-2"
    },
    {
      componentType: 'input', // Tipo 'input' file si tu renderizador lo soporta, o crear uno personalizado
      label: "Archivos adjuntos (PDF, JPG, JPEG)",
      name: "archivo_adjunto",
      type: "file",
      // rules: { required: "Requerido" },
      className: "md:col-span-2"
    }
  ]
};