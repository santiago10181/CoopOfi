import { useNavigate } from "react-router-dom";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, X } from "lucide-react";

// ─── Configuración de cada estado ────────────────────────────────
const CONFIG = {
  success: {
    icon: CheckCircle2,
    iconClass:   "text-emerald-500",
    bgIcon:      "bg-emerald-50",
    badge:       "Solicitud enviada",
    badgeClass:  "bg-emerald-100 text-emerald-700",
    title:       "¡Todo listo!",
    description: "Tu solicitud de crédito fue recibida correctamente. Nuestro equipo la revisará y te notificaremos pronto.",
    primaryLabel:   "Ver mis créditos",
    primaryClass:   "bg-black text-[#FFD700] hover:bg-gray-900",
    secondaryLabel: null,
  },
  error: {
    icon: XCircle,
    iconClass:   "text-red-400",
    bgIcon:      "bg-red-50",
    badge:       "Error al enviar",
    badgeClass:  "bg-red-100 text-red-600",
    title:       "Algo salió mal",
    description: null, // Se pasa dinámicamente desde useSubmitForm
    primaryLabel:   "Reintentar",
    primaryClass:   "bg-black text-[#FFD700] hover:bg-gray-900",
    secondaryLabel: "Volver al formulario",
  },
};

// ─── Ícono animado para éxito ─────────────────────────────────────
const SuccessAnimation = () => (
  <div className="relative">
    {/* Anillo pulsante */}
    <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30" />
    <div className="relative w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
      <CheckCircle2 size={44} strokeWidth={1.5} className="text-emerald-500" />
    </div>
  </div>
);

// ─── Ícono estático para error ────────────────────────────────────
const ErrorIcon = () => (
  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
    <XCircle size={44} strokeWidth={1.5} className="text-red-400" />
  </div>
);

// ─── Componente principal ─────────────────────────────────────────
export const FormResultModal = ({ status, message, onClose, onRetry }) => {
  const navigate = useNavigate();

  // No renderiza si no hay status activo
  if (!status) return null;

  const cfg = CONFIG[status];

  const handlePrimary = () => {
    if (status === "success") {
      navigate("/CoopOfi/dashboard/creditos");
    } else {
      onRetry?.();
      onClose();
    }
  };

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">

      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={status === "error" ? onClose : undefined}
      />

      {/* Card del modal */}
      <div className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl shadow-black/20 border border-gray-100 animate-in zoom-in-95 duration-300 overflow-hidden">

        {/* Acento superior */}
        <div className={`h-1 w-full ${status === "success" ? "bg-gradient-to-r from-emerald-400 to-emerald-300" : "bg-gradient-to-r from-red-400 to-red-300"}`} />

        {/* Botón cerrar — solo en error */}
        {status === "error" && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-xl text-gray-300 hover:text-gray-600 hover:bg-gray-100 transition-all"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        )}

        <div className="px-8 py-8 flex flex-col items-center text-center gap-5">

          {/* Ícono animado */}
          {status === "success" ? <SuccessAnimation /> : <ErrorIcon />}

          {/* Badge de estado */}
          <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${cfg.badgeClass}`}>
            {cfg.badge}
          </span>

          {/* Título + descripción */}
          <div className="space-y-2">
            <h3 className="text-xl font-black text-gray-900 tracking-tight">
              {cfg.title}
            </h3>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              {/* En error, usa el mensaje dinámico; en éxito, el texto fijo */}
              {status === "error" && message ? message : cfg.description}
            </p>
          </div>

          {/* Acciones */}
          <div className="w-full flex flex-col gap-2 mt-1">
            <button
              onClick={handlePrimary}
              className={`
                w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl
                font-black text-xs uppercase tracking-widest transition-all
                active:scale-95 shadow-lg shadow-black/10
                ${cfg.primaryClass}
              `}
            >
              {status === "success"
                ? <><ArrowRight size={15} />{cfg.primaryLabel}</>
                : <><RotateCcw size={15} />{cfg.primaryLabel}</>
              }
            </button>

            {cfg.secondaryLabel && (
              <button
                onClick={onClose}
                className="w-full py-3 px-6 rounded-2xl font-bold text-xs uppercase
                           tracking-widest text-gray-400 hover:text-gray-900
                           hover:bg-gray-50 border-2 border-gray-100 hover:border-gray-200
                           transition-all"
              >
                {cfg.secondaryLabel}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
