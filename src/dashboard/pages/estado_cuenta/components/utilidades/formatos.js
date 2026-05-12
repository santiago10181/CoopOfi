export const formatCOP = (valor) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(valor);

export const formatFecha = (yyyymmdd) => {
  const s = String(yyyymmdd);
  return new Date(`${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}`)
    .toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' });
};