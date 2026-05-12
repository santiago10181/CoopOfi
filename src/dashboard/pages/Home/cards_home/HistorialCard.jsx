import { CardsHome } from "./CardsHome";

// Icono según estado real del préstamo
const iconPorEstado = {
  aprobado:   "✅",
  pagado:     "⚪",
  en_estudio: "⏳",
  pendiente:  "🕐",
  rechazado:  "❌",
};

export const HistorialCard = ({ prestamos }) => {
 
  return (
    <CardsHome title="Historial Reciente" variant="subtle">
      <ul className="text-sm space-y-3">
        {prestamos.map((prestamo) => (
          <li key={prestamo.id}
            className={`flex items-center gap-2 ${prestamo.estado === 'rechazado' && 'text-gray-400'}`}>
            <span>{iconPorEstado[prestamo.estado] ?? "❓"}</span>
            <div>
              <p className="font-medium">{prestamo.tipo_credito}</p>  {/* ← "Libranza", "Educativo"... */}
              <p className="text-xs capitalize">{prestamo.estado.replace("_", " ")}</p> {/* ← "en_estudio" → "en estudio" */}
            </div>
          </li>
        ))}
      </ul>
    </CardsHome>
  );
};
