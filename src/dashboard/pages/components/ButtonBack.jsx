import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
        
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
      >
        <div className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
        </div>
        <span className="font-medium">Volver a mis créditos</span>
      </button>
    );
};