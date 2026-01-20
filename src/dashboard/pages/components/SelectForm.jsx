export const SelectForm = ({ label, name, options = [], register, rules, error, placeholder, className, ...props }) => {
  return (
    <div className={`w-full group ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-2.5 text-xs font-black text-slate-500 uppercase tracking-widest group-focus-within:text-[#b89b00]">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={name}
          {...(register && register(name))}
          className={`
            w-full h-[48px] px-5 rounded-2xl text-slate-900 bg-slate-50/50 
            border-2 appearance-none cursor-pointer transition-all duration-300 outline-none font-semibold text-sm
            ${error 
               ? 'border-red-200 bg-red-50/30' 
               : 'border-slate-100 hover:border-slate-200 focus:bg-white focus:border-[#FFD700] focus:shadow-xl focus:shadow-yellow-500/10'
            }
          `}
          defaultValue=""
          {...props}
        >
          <option value="" disabled>{placeholder || "Seleccione una opción"}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      {error && <p className="mt-2 text-[11px] font-bold text-red-500 ml-1">* {error.message}</p>}
    </div>
  );
};