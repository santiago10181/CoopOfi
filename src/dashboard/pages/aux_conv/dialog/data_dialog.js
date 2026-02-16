// src/data/auxiliosMapping.ts
// 🧠 CEREBRO DEL FORMULARIO DINÁMICO
// Este diccionario permite que el Modal se construya solo, sin hardcodear ifs anidados.

export const AUXILIOS_CONFIG = {
  SALUD: {
    label: "Salud y Bienestar",
    subtypes: [
      { id: "optica", label: "Lentes y Óptica", req: "Factura + Fórmula médica" },
      { id: "dental", label: "Tratamientos Odontológicos", req: "Presupuesto o Factura" },
      { id: "medicina", label: "Medicina Prepagada", req: "Comprobante de pago mensual" }
    ]
  },
  EDUCACION: {
    label: "Educación y Formación",
    subtypes: [
      { id: "matricula", label: "Matrícula Universidad/Colegio", req: "Orden de matrícula vigente" },
      { id: "utiles", label: "Útiles Escolares", req: "Lista oficial + Factura" },
      { id: "cursos", label: "Cursos Cortos / Diplomados", req: "Certificado de inscripción" }
    ]
  },
  CALAMIDAD: {
    label: "Calamidad Doméstica",
    subtypes: [
      { id: "luto", label: "Fallecimiento Familiar", req: "Certificado de defunción + Parentesco" },
      { id: "siniestro", label: "Siniestro (Incendio/Robo)", req: "Denuncia policial o Bomberos" },
      { id: "incapacidad", label: "Incapacidad Prolongada", req: "Certificado EPS > 15 días" }
    ]
  }
};
