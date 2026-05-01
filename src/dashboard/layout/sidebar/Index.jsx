import { useUIStore }     from "../../store/useUIStore";
import { SidebarHeader }  from "./componentes/SidebarHeader";
import { SidebarMenu }    from "./componentes/SidebarMenu"
import { SidebarFooter }  from "./componentes/SidebarFooter";
import {
  LayoutDashboard, Wallet, ArrowLeftRight,
  FileText, Bot, Receipt
} from "lucide-react";

// ─── Menú organizado por grupos ───────────────────────────────────
const MENU_GROUPS = [
  {
    label: "Principal",
    items: [
      { icon: LayoutDashboard, label: "Resumen",  path: "/CoopOfi/dashboard" },
      { icon: Bot,             label: "Chatbot",  path: "/CoopOfi/dashboard/chatbot" },
    ],
  },
  {
    label: "Servicios",
    items: [
      { icon: Wallet,          label: "Mis Créditos", path: "/CoopOfi/dashboard/creditos" },
      { icon: ArrowLeftRight,  label: "Auxilios",     path: "/CoopOfi/dashboard/auxilios-convenios" },
    ],
  },
  {
    label: "Documentos",
    items: [
      { icon: FileText, label: "Estado de Cuenta",     path: "/CoopOfi/dashboard/estado-cuenta" },
      { icon: Receipt,  label: "Certificado de renta", path: "/CoopOfi/dashboard/certificado-renta" },
    ],
  },
];

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useUIStore();

  const handleMobileClick = () => {
    if (window.innerWidth < 1024) closeSidebar();
  };

  return (
    <>
      {/* Overlay móvil */}
      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-gray-100
        flex flex-col transition-transform duration-300 ease-in-out
        shadow-2xl lg:shadow-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
      `}>

        <SidebarHeader onClose={closeSidebar} />

        <SidebarMenu
          groups={MENU_GROUPS}
          onMobileItemClick={handleMobileClick}
        />

        <SidebarFooter />

      </aside>
    </>
  );
};

export default Sidebar;
