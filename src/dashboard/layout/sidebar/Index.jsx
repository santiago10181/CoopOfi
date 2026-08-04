import { useUIStore } from "../../store/useUIStore";
import { SidebarHeader } from "./componentes/SidebarHeader";
import { SidebarMenu } from "./componentes/SidebarMenu";
import { SidebarFooter } from "./componentes/SidebarFooter";
import {
  LayoutDashboard, Wallet, ArrowLeftRight,
  FileText, Bot, Receipt
} from "lucide-react"; // Librería de íconos moderna y muy ligera

// Estructura de datos del menú. Al tenerlo como constante fuera del componente,
// evitamos que React lo vuelva a crear en memoria en cada renderizado (Optimización).
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
  // Zustand nos da el estado de apertura y la función para cerrarlo
  const { isSidebarOpen, closeSidebar } = useUIStore();

  // Función para cerrar el menú cuando se hace clic en un enlace desde un móvil
  const handleMobileClick = () => {
    if (window.innerWidth < 1024) closeSidebar();
  };

  return (
    <>
      {/* 
        CAPA OSCURA (OVERLAY) - Solo visible en móviles
        Se usa el patrón de Tailwind para crear animaciones sin CSS extra:
        - 'fixed inset-0': Cubre toda la pantalla.
        - 'bg-black/60 backdrop-blur-sm': Efecto vidrio esmerilado moderno.
        - Condicional: Si está abierto, es visible y captura clics. Si no, es invisible 
          y con 'pointer-events-none' deja que el usuario haga clic en lo que hay detrás.
      */}
      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* 
        EL ASIDE (SIDEBAR REAL)
        - 'fixed' en móviles para que flote sobre el contenido.
        - 'lg:static' en escritorio para que ocupe su espacio en el Flexbox.
        - 'transition-transform': Animación suave al deslizarse.
        - '-translate-x-full': Lo empuja fuera de la pantalla a la izquierda cuando está cerrado en móvil.
        - 'translate-x-0': Lo regresa a la posición 0 cuando está abierto.
      */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-gray-100
        flex flex-col transition-transform duration-300 ease-in-out
        shadow-2xl lg:shadow-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
      `}>

        {/* Componentes internos del Sidebar para mantener limpio este archivo */}
        <SidebarHeader onClose={closeSidebar} />
        
        {/* Le pasamos el menú y la función de cierre al componente que itera y pinta los enlaces */}
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