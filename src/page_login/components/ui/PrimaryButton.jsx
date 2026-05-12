export const PrimaryButton = ({
  children,
  icon: Icon,
  isLoading = false,
  className = "",
  disabled,
  ...props
}) => (
  <button
    {...props}
    disabled={disabled || isLoading}
    aria-busy={isLoading}
    className={`w-full py-4 bg-black text-[#FFD700] rounded-[24px] font-bold text-lg
                hover:bg-gray-900 active:scale-[0.98] transition-all
                flex items-center justify-center gap-3 disabled:opacity-50 disabled:active:scale-100
                ${className}`}
  >
    {isLoading ? <span>Cargando...</span> : children}
    {!isLoading && Icon ? <Icon size={20} /> : null}
  </button>
);