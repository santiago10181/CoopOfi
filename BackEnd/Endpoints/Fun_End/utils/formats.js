// BackEnd/utils/dataUserCreditFormatters.js

export const formatDate = (value) => {
  if (!value) return "";
  return new Date(value).toISOString().split("T")[0];
};

export const mapTipoDocumento = (tipo) => {
  const tipos = {
    CC: "Cédula de Ciudadanía",
    CE: "Cédula de Extranjería",
    PASAPORTE: "Pasaporte",
    NIT: "NIT",
  };

  return tipos[tipo] || tipo || "";
};

export const mapEstadoCivil = (estado) => {
  const estados = {
    Soltero: "1",
    Casado: "2",
    "Union Libre": "3",
    Divorciado: "4",
    Separado: "5",
    Viudo: "6",
  };

  return estados[estado] || "";
};