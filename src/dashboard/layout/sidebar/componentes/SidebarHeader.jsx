import { X } from "lucide-react";

export const SidebarHeader = ({ onClose }) => (
  <div className="flex items-center justify-between px-6 py-6 shrink-0">

    {/* Brand */}
    <div>
      <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none select-none">
        Coop<span className="text-[#FFD700]">Ofi</span>
      </h1>
      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
        Oficina Virtual
      </p>
    </div>

    {/* Acento + botón cerrar móvil */}
    <div className="flex items-center gap-2">
      <div className="h-7 w-1 bg-[#FFD700] rounded-full" />
      <button
        onClick={onClose}
        className="lg:hidden p-2 text-gray-400 hover:bg-gray-100 hover:text-red-500 rounded-xl transition-all"
      >
        <X size={20} strokeWidth={2.5} />
      </button>
    </div>

  </div>
);
