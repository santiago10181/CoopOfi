// src/dashboard/pages/home/cards_home/CardsHome.jsx
import { DashboardCard } from "../../components/DashboardCard";

// IMPORTANTE: Desestructurar { title, children, variant }
export const CardsHome = ({ title, children, variant = "default" }) => {
  
const designs = {
    // 1. CREDENCIAL (La tarjeta VIP)
    // Usamos un gris muy oscuro (casi negro) para dar elegancia, con el borde amarillo de tu marca.
    primary: "bg-gray-900 text-white border-t-4 border-t-[#FFD500] shadow-xl shadow-gray-200",
    
    // 2. EN CURSO (El Rastreador)
    // Fondo blanco limpio (como el Login) pero con el borde amarillo indicando "Proceso".
    active: "bg-white border border-gray-100 border-l-4 border-l-[#FFD500] shadow-sm",
    
    // 3. HISTORIAL (Lo secundario)
    // Mantenemos lo sutil, pero alineado a tus grises.
    subtle: "bg-gray-50 border border-gray-200 text-gray-600 shadow-none",
    
    // Default
    default: "bg-white border-gray-200"
};

  return (
    <DashboardCard className={designs[variant] || designs.default}>
        <div className="flex flex-col h-full">
            {/* Si no hay título, este div quedará vacío, por eso asegúrate de enviarlo */}
            <div className="mb-4">
                <h2 className={`text-lg font-bold ${variant === 'primary' ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h2>
            </div>
            
            <div className="flex-1">
                {children}
            </div>
        </div>
    </DashboardCard>
  ); 
};