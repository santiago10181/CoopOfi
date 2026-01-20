export const InputForm = ({ label, name, type = "text", register, rules, error, placeholder, className = "", ...props }) => {
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
          {...(register && register(name))}
          className={`
            w-full h-[48px] px-5 rounded-2xl bg-slate-50/50 text-slate-900 font-semibold text-sm
            border-2 transition-all duration-300 outline-none
            placeholder:text-slate-300
            ${error 
              ? 'border-red-200 bg-red-50/30 focus:border-red-400' 
              : 'border-slate-100 hover:border-slate-200 focus:bg-white focus:border-[#FFD700] focus:shadow-xl focus:shadow-yellow-500/10'
            }
          `}
          {...props}
        />
      </div>

      {error && (
        <p className="mt-2 text-[11px] font-bold text-red-500 flex items-center gap-1.5 ml-1">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"/>
          {error.message}
        </p>
      )}
    </div>
  );
};