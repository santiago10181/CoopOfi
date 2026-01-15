// Cambiamos a 'export const'
export const HeaderBrand = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* MÓVIL */}
      <h2 className="text-xl font-extrabold text-gray-900 lg:hidden leading-none">
        Coop<span className="text-[#FFD700]">Ofi</span>
      </h2>
      
      {/* DESKTOP */}
      <h2 className="hidden lg:block text-xl font-bold text-gray-800 leading-none">
        Oficina Virtual
      </h2>
    </div>
  );
};