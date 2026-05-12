
// Componente genérico y reutilizable para las 3 tarjetas de resumen
const ResumenCard = ({ titulo, valor, subtexto, acento, children }) => {
  const acentos = {
    verde:  'bg-emerald-50 border-emerald-200 text-emerald-700',
    rojo:   'bg-rose-50 border-rose-200 text-rose-700',
    azul:   'bg-blue-50 border-blue-200 text-blue-700',
  };

  return (
    <div className={`p-6 rounded-2xl border ${acentos[acento]} bg-white`}>
      <p className="text-xs font-semibold uppercase tracking-wide opacity-70 mb-1">
        {titulo}
      </p>
      <p className="text-3xl font-bold text-gray-900 mb-1">{valor}</p>
      {subtexto && <p className="text-xs opacity-60">{subtexto}</p>}
      {children}
    </div>
  );
};
export default ResumenCard;