import { Eye, MoreHorizontal } from 'lucide-react';

export const AccionsTableData = () => {
    return (
        <div className="flex items-center justify-end gap-2">
            <button 
                className="p-2 rounded-lg text-gray-400 hover:text-[#FFD700] hover:bg-black transition-all duration-200 group-hover:bg-gray-50"
                title="Ver detalles"
            >
                <Eye className="w-4 h-4" />
            </button>
            <button 
                className="p-2 rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                title="Más opciones"
            >
                <MoreHorizontal className="w-4 h-4" />
            </button>
        </div>
    );
};