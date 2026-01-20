// src/components/LayoutForms.jsx
import { ButtonBack } from "./ButtonBack";

export const LayoutForms = ({ children, title, description }) => {
  return (
    // Forzamos h-screen y overflow-hidden para que la página no haga scroll, solo el form
    <div className="flex flex-col h-screen bg-slate-50/50 overflow-hidden px-4 py-4 animate-in fade-in duration-700">
      
      <div className="max-w-6xl mx-auto w-full mb-3 shrink-0">
        <ButtonBack />
      </div>

      {/* Contenedor principal con altura flexible pero limitada al padre */}
      <div className="flex-1 max-w-6xl mx-auto w-full bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col min-h-0 overflow-hidden">
        
        {/* Header compacto */}
        <div className="px-8 py-4 bg-white border-b border-slate-50 flex shrink-0 items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              {description}
            </p>
          </div>
          <div className="h-8 w-1 bg-[#FFD700] rounded-full" />
        </div>

        {/* El children (FormSolicitudCredito) ocupará este espacio */}
        <div className="flex-1 flex flex-col min-h-0 relative bg-white">
            {children}
        </div>
      </div>
    </div>
  );
};