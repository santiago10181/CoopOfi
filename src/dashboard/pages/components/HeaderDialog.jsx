import {X} from 'lucide-react';
export const HeaderDialog = ({ title, onClose }) => {
    return (
        <div className="px-8 pt-8 pb-4 flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Nueva Solicitud</h2>
                <p className="text-gray-500 text-sm mt-1">{title}</p>
            </div>
            <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <X size={20} className="text-gray-600" />
            </button>
        </div>
    );
}