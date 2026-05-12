// src/data/auxilios.js (o la ruta donde tengas tus tablas simuladas)

export const auxilios = [
  // --- GRUPO 1 ---
  {
    id: 1,
    radicado: "SOL-2024-001", // Mantenemos el código bonito para la UI
    usuario_id: 1,            // Vinculado a "Juan Pérez"
    monto: 850000,
    tipo: "Optometría",
    plazo: "24 Meses",
    fecha_solicitud: "2023-10-25", // Formato fecha ISO es mejor para BD
    estado: "aprobado",
  },
  {
    id: 2,
    radicado: "SOL-2024-002",
    usuario_id: 2,            // Vinculado a "Maria Rodriguez"
    monto: 2800000,
    tipo: "Funerario",
    plazo: "60 Meses",
    fecha_solicitud: "2024-01-28",
    estado: "revision",
  },
  {
    id: 3,
    radicado: "SOL-2024-003",
    usuario_id: 3,            // Vinculado a "Carlos Gomez" (asumiendo que el ID 3 de tu BD será Carlos, aunque en el mock tiene otro nombre, he mapeado los IDs a tus usuarios actuales)
    monto: 450000,
    tipo: "Parques de Diversiones",
    plazo: "12 Meses",
    fecha_solicitud: "2024-02-15",
    estado: "rechazado",
  },
  {
    id: 4,
    radicado: "SOL-2024-004",
    usuario_id: 1,            // Repetimos usuarios porque solo tienes 3 en la BD
    monto: 1200000,
    tipo: "Odontología",
    plazo: "36 Meses",
    fecha_solicitud: "2024-02-20",
    estado: "pendiente",
  },
  // --- GRUPO 2 ---
  {
    id: 5,
    radicado: "SOL-2024-005",
    usuario_id: 2,
    monto: 950000,
    tipo: "Optometría",
    plazo: "24 Meses",
    fecha_solicitud: "2023-10-25",
    estado: "aprobado",
  },
  {
    id: 6,
    radicado: "SOL-2024-006",
    usuario_id: 3,
    monto: 3000000,
    tipo: "Funerario",
    plazo: "60 Meses",
    fecha_solicitud: "2024-01-28",
    estado: "revision",
  },
  {
    id: 7,
    radicado: "SOL-2024-007",
    usuario_id: 1,
    monto: 380000,
    tipo: "Parques de Diversiones",
    plazo: "12 Meses",
    fecha_solicitud: "2024-02-15",
    estado: "rechazado",
  },
  {
    id: 8,
    radicado: "SOL-2024-008",
    usuario_id: 2,
    monto: 1500000,
    tipo: "Farmacia",
    plazo: "36 Meses",
    fecha_solicitud: "2024-02-20",
    estado: "pendiente",
  },
  // --- GRUPO 3 ---
  {
    id: 9,
    radicado: "SOL-2024-009",
    usuario_id: 3,
    monto: 720000,
    tipo: "Optometría",
    plazo: "24 Meses",
    fecha_solicitud: "2023-10-25",
    estado: "aprobado",
  }
];