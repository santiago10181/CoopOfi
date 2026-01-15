// 1. IMPORTACIONES CORREGIDAS (Con llaves { })
import { useUIStore } from "../../store/useUIStore"; 
import { SidebarHeader } from "./componentes/SidebarHeader"; 
import { SidebarMenu } from "./componentes/SidebarMenu";

import { 
  LayoutDashboard, Wallet, ArrowLeftRight, FileText, Bot
} from "lucide-react";

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: "Resumen", path: "/dashboard" },
  { icon: Bot, label: "Chatbot", path: "/dashboard/chatbot" }, // Aquí está tu link
  { icon: FileText, label: "Convenios", path: "/dashboard/convenios" },
  { icon: Wallet, label: "Mis Créditos", path: "/dashboard/creditos" },
  { icon: ArrowLeftRight, label: "Auxilios", path: "/dashboard/auxilios" },
];

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useUIStore(); 

  const handleMobileClick = () => {
    if (window.innerWidth < 1024) closeSidebar();
  };

  return (
    <>
      {/* Overlay Móvil */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Estructura Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-gray-100
        flex flex-col transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static
      `}>
        
        {/* Header */}
        <SidebarHeader onClose={closeSidebar} />
        
        {/* Menú */}
        <SidebarMenu 
          items={MENU_ITEMS} 
          onMobileItemClick={handleMobileClick} 
        />
      </aside>
    </>
  );
};

// Como Sidebar es el índice principal de la carpeta, usar export const aquí también es buena práctica,
// pero export default es aceptable si así lo importas en el Layout.
export default Sidebar;