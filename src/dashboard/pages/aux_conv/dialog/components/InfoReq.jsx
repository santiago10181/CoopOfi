import { Info } from 'lucide-react';
export const InfoReq = ({ currentSubtype }) => {
    return (
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3 animate-in fade-in">
            <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
            <div>
               <h4 className="text-sm font-bold text-blue-900">Requisito Obligatorio</h4>
              <p className="text-sm text-blue-700 mt-0.5">{currentSubtype?.req}</p>
            </div>
        </div>
    );
}