import { Landmark } from 'lucide-react';
export const Titulos = ({ titulo }) => {
    return (
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
            <Landmark size={16} className="text-rose-500" />
            {titulo}
        </h2>
    )
}