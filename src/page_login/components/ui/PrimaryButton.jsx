// src/components/ui/PrimaryButton.jsx
export const PrimaryButton = ({ children, icon: Icon, isLoading, ...props }) => (
  <button
    {...props}
    disabled={isLoading}
    className="w-full py-4 bg-black text-[#FFD700] rounded-[24px] font-bold text-lg 
               hover:bg-gray-900 active:scale-[0.98] transition-all 
               flex items-center justify-center gap-3 disabled:opacity-50"
  >
    {isLoading ? <span className="animate-pulse">Cargando...</span> : children}
    {(!isLoading && Icon) && <Icon size={20} />}
  </button>
);