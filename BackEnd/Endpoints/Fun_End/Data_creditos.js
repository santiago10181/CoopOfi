export const DatosCreditosMockHandler = (req, res) => {
  // Simulamos un delay de 1.5 segundos para ver el loading
  setTimeout(() => {
    return res.status(200).json({
      data: [
        {
          id: 1,
          tipo: "Crédito de Consumo",
          monto: 5000000,
          plazo: 12,
          estado: "Aprobado",
          fecha_solicitud: "2024-01-15",
          fecha_aprobacion: "202    4-01-20",   
        },
    ]});  }, 1500);
};