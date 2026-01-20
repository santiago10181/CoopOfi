export const ButtonSubmitt = ({ isSubmitting }) => {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="group relative overflow-hidden bg-slate-900 text-[#FFD700] px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] 
                hover:bg-[#FFD700] hover:text-black active:scale-95 transition-all duration-500
                shadow-xl shadow-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span className="relative z-10">{isSubmitting ? 'Procesando...' : 'Enviar Solicitud'}</span>
            <div className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
    );
};