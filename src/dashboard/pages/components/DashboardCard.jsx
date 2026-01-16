// Un componente contenedor flexible ("Wrapper")
export const DashboardCard = ({ children, className = "" }) => {
  return (
    <div 
      className={`
        bg-black/5
        rounded-2xl 
        p-6 
        border border-gray-100 
        shadow-sm 
        h-full 
        transition-shadow duration-300 
        hover:shadow-md 
        ${className}
      `}
    >
      {children}
    </div>
  );
};