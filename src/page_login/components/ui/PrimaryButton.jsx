// src/page_login/components/ui/PrimaryButton.jsx

/**
 * Botón reutilizable para acciones principales.
 *
 * Deshabilita la interacción durante procesos asíncronos para impedir
 * envíos duplicados del formulario.
 */
export const PrimaryButton = ({
  children,
  icon: Icon,
  isLoading = false,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      {...props}
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={`
        flex w-full items-center justify-center gap-3 rounded-[24px]
        bg-black py-4 text-lg font-bold text-[#FFD700]
        transition-all hover:bg-gray-900 active:scale-[0.98]
        disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100
        ${className}
      `}
    >
      {isLoading ? <span>Cargando...</span> : children}
      {!isLoading && Icon ? <Icon size={20} aria-hidden="true" /> : null}
    </button>
  );
};