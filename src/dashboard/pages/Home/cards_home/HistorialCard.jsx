import { CardsHome } from "./CardsHome";
import { FileText, Clock, AlertTriangle, CheckCircle, Undo2, XCircle, Ban, HelpCircle } from "lucide-react";

// 🚀 MEJORA: Reemplazamos emojis por íconos de Lucide React (accesibles y consistentes)
// Además, aprovechamos el diccionario para formatear el texto correctamente sin depender de replace()
const configPorEstado = {
  Radicada:     { icon: FileText,      label: "Radicada",     color: "text-blue-500" },
  EnRevision:   { icon: Clock,         label: "En Revisión",  color: "text-amber-500" },
  Condicionada: { icon: AlertTriangle, label: "Condicionada", color: "text-orange-500" },
  Aprobada:     { icon: CheckCircle,   label: "Aprobada",     color: "text-emerald-500" },
  Devuelta:     { icon: Undo2,         label: "Devuelta",     color: "text-purple-500" },
  Rechazada:    { icon: XCircle,       label: "Rechazada",    color: "text-red-500" },
  Cancelada:    { icon: Ban,           label: "Cancelada",    color: "text-gray-400" }
};

export const HistorialCard = ({ user }) => {
  const prestamos = user?.prestamos ?? [];

  return (
    <CardsHome title="Historial Reciente" variant="subtle">
      <ul className="text-sm space-y-3">
        {prestamos.length === 0 ? (
          <li className="text-gray-400 text-xs">Aún no tienes historial de préstamos.</li>
        ) : (
          prestamos.map((prestamo) => {
            // Si el estado no está en el diccionario, usamos un fallback
            const config = configPorEstado[prestamo.estado] || { 
              icon: HelpCircle, 
              label: prestamo.estado || "Desconocido", 
              color: "text-gray-500" 
            };
            const Icon = config.icon;

            return (
              <li key={prestamo.id}
                className={`flex items-center gap-3 ${prestamo.estado === 'Rechazada' || prestamo.estado === 'Cancelada' ? 'opacity-60' : ''}`}>
                
                <Icon size={18} className={`shrink-0 ${config.color}`} />
                
                <div>
                  <p className="font-medium text-gray-800">
                    {/* Igual que en EnCursoCard, ajusta esta prop según lo que devuelva tu backend */}
                    {prestamo.tipo_credito || `Crédito #${prestamo.id}`}
                  </p>
                  <p className={`text-xs font-medium ${config.color}`}>
                    {config.label}
                  </p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </CardsHome>
  );
};