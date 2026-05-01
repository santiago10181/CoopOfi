import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SidebarFooter = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="px-3 py-4 border-t border-gray-100 shrink-0">
      <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-gray-50 transition-all group">

        {/* Avatar */}
        <div className="w-9 h-9 bg-black text-[#FFD700] rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-md shadow-black/10">
          SD
        </div>

        {/* Info usuario */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 leading-tight truncate">
            Santiago Dev
          </p>
          <p className="text-[10px] text-gray-400 font-medium">
            Socio #8821
          </p>
        </div>

        {/* Botón logout */}
        <button
          onClick={handleLogout}
          title="Cerrar sesión"
          className="p-1.5 rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all shrink-0"
        >
          <LogOut size={15} strokeWidth={2.5} />
        </button>

      </div>
    </div>
  );
};
