import { X } from "lucide-react";

export const SidebarHeader = ({ onClose }) => (
  <div className="h-24 flex items-center justify-between px-8">
    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight select-none">
      Coop<span className="text-[#FFD700]">Ofi</span>
    </h1>
    <button 
      onClick={onClose} 
      className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 hover:text-red-500 rounded-full transition-colors"
    >
      <X size={24} />
    </button>
  </div>
);