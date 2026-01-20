export const OrigenFondosField = ({ children }) => {
  return (
    <div className="col-span-1 md:col-span-2 bg-slate-900 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-900/20 border border-slate-800 animate-in fade-in duration-1000">
      
      <div className="flex items-start gap-4 mb-8">
        <div className="bg-[#FFD700] text-black w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 rotate-3">
          !
        </div>
        <div>
          <h4 className="text-white font-bold text-lg tracking-tight">Declaración de Origen de Fondos</h4>
          <p className="text-slate-400 text-sm">Este campo es obligatorio según normativa vigente.</p>
        </div>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mb-8">
        <p className="text-slate-200 text-sm text-justify leading-relaxed font-medium">
          <span className="text-[#FFD700] font-black mr-2">1.</span> 
          Los recursos que poseo provienen de las siguientes fuentes (detalle ocupación, oficio, actividad o negocio):
        </p>
        <div className="mt-4">
          {children}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { n: "2", t: "Actividad lícita bajo marco legal colombiano." },
          { n: "3", t: "Información veraz, verificable y actualización anual." },
          { n: "4", t: "Prevención de lavado de activos y financiación del terrorismo." }
        ].map((item) => (
          <div key={item.n} className="flex gap-3">
            <span className="text-[#FFD700] font-black text-xs">{item.n}.</span>
            <p className="text-slate-400 text-[11px] leading-tight text-justify uppercase font-semibold tracking-wider">
              {item.t}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};