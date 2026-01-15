import { Bell } from "lucide-react";

export const UserProfile = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      {/* Notificaciones */}
      <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors group">
        <Bell size={20} className="group-hover:text-gray-900 transition-colors" />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
      </button>

      {/* Separador */}
      <div className="h-8 w-[1px] bg-gray-200 mx-1 hidden md:block"></div>
      
      {/* Pill de Usuario */}
      <button className="flex items-center gap-3 pl-2 py-1 pr-1 rounded-full hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold text-gray-900 leading-tight">Santiago Dev</p>
          <p className="text-[10px] text-gray-500 font-medium">Socio #8821</p>
        </div>
        <div className="w-10 h-10 bg-black text-[#FFD700] rounded-full flex items-center justify-center font-bold text-sm shadow-sm ring-2 ring-white">
          SD
        </div>
      </button>
    </div>
  );
};
