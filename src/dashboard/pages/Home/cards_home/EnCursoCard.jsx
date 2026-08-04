import { CardsHome } from "./CardsHome";

// 🚀 MEJORA: Diccionario para asignar colores lógicos según el estado real del préstamo
const colorPorEstado = {
  Radicada:     "bg-blue-50 text-blue-600",
  EnRevision:   "bg-amber-50 text-amber-600",
  Condicionada: "bg-orange-50 text-orange-600",
  Aprobada:     "bg-emerald-50 text-emerald-600",
  Devuelta:     "bg-purple-50 text-purple-600",
  Rechazada:    "bg-red-50 text-red-600",
  Cancelada:    "bg-gray-100 text-gray-500"
};

export const EnCursoCard = ({ user }) => {
    const prestamos = user?.prestamos ?? [];
    
    // 🚀 MEJORA: Como en el backend ordenamos por fecha DESC, el más reciente es el índice 0
    const lastPrestamo = prestamos[0] ?? {};

    // Si no hay préstamos, usamos un color neutral
    const estadoActual = lastPrestamo.estado || 'Sin estado';
    const colorClass = colorPorEstado[estadoActual] || "bg-gray-100 text-gray-600";

    return (
        <CardsHome title="En Curso" variant="active">
            {/* OJO: Si tu BD devuelve tipo_credito_id, deberás cambiar esto a lastPrestamo.tipo_credito_nombre 
                o hacer un JOIN en el backend para traer el nombre */}
            <p className="text-gray-600 font-medium">
              {lastPrestamo.tipo_credito || lastPrestamo.tipo_credito_id || 'Sin datos'}
            </p>
            
            <div className={`mt-3 flex items-center gap-2 font-bold p-2 rounded-lg ${colorClass}`}>
                {/* El círculo animate-pulse solo tiene sentido si está en revisión o radicada */}
                {(estadoActual === 'Radicada' || estadoActual === 'EnRevision') && (
                  <span className="animate-pulse">●</span>
                )}
                {estadoActual}
            </div>
        </CardsHome>
    );
};