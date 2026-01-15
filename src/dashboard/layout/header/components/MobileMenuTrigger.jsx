import { Menu } from "lucide-react";
import {useUIStore} from "../../../store/useUIStore";

export const MobileMenuTrigger = () => {
  const openSidebar = useUIStore((state) => state.openSidebar);

  return (
    <button 
      onClick={openSidebar}
      className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-black/5"
      aria-label="Abrir menú de navegación"
    >
      <Menu size={28} />
    </button>
  );
};
