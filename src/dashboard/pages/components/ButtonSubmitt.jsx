// components/ButtonSubmitt.jsx
export const ButtonSubmitt = ({ isSubmitting, submitError }) => (
  <div className="flex flex-col items-end gap-2">
    {submitError && (
      <p className="text-[11px] font-bold text-red-500 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
        {submitError}
      </p>
    )}
    <button
      type="submit"
      disabled={isSubmitting}
      className="group relative overflow-hidden bg-slate-900 text-[#FFD700] px-10 py-4 rounded-2xl
                 font-black text-sm uppercase tracking-[0.2em]
                 hover:bg-[#FFD700] hover:text-black active:scale-95 transition-all duration-500
                 shadow-xl shadow-slate-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="relative z-10 flex items-center gap-2">
        {isSubmitting ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Procesando...
          </>
        ) : 'Enviar Solicitud'}
      </span>
      <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  </div>
);
