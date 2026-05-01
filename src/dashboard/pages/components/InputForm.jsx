export const InputForm = ({ label, name, type = "text", register, rules, error, placeholder, className = "", readOnly, ...props }) => {
  return (
    <div className={`w-full group ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-2.5 text-xs font-black text-slate-500 uppercase tracking-widest group-focus-within:text-[#b89b00] transition-colors">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          readOnly={readOnly}
          {...(register && register(name))}
          className={`
            w-full h-[48px] px-5 rounded-2xl font-semibold text-sm
            border-2 transition-all duration-300 outline-none placeholder:text-slate-300
            ${readOnly
              ? 'bg-slate-100 text-slate-400 border-slate-100 cursor-not-allowed'
              : error
                ? 'bg-red-50/30 text-slate-900 border-red-200 focus:border-red-400'
                : 'bg-slate-50/50 text-slate-900 border-slate-100 hover:border-slate-200 focus:bg-white focus:border-[#FFD700] focus:shadow-xl focus:shadow-yellow-500/10'
            }
          `}
          {...props}
        />

        {/* Ícono candado para campos bloqueados */}
        {readOnly && (
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-[11px] font-bold text-red-500 flex items-center gap-1.5 ml-1">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          {error.message}
        </p>
      )}
    </div>
  );
};
