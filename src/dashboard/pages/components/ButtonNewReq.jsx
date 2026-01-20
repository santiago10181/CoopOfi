import { Plus } from 'lucide-react';
export const ButtonNewReq = ({ onClick }) => {
    return (
        <button
        onClick={onClick}
        className="shrink-0 flex items-center gap-2 bg-[#FFD700] text-black px-6 py-2.5 rounded-xl 
                   font-bold text-sm hover:bg-[#e6c200] active:scale-95 transition-all 
                   shadow-md shadow-yellow-500/20"
      >
        <span>Nueva Solicitud</span>
        <div className="bg-black/10 rounded-full p-1">
            <Plus size={14} strokeWidth={3} />
        </div>
      </button>
    );
};