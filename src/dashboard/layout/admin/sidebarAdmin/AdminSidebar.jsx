// src/dashboard/admin/layout/AdminSidebar.jsx

import { useUIStore } from "../../../store/useUIStore";
import { SidebarHeader } from "../../sidebar/componentes/SidebarHeader";
import { SidebarMenu } from "../../sidebar/componentes/SidebarMenu";
import { SidebarFooter } from "../../sidebar/componentes/SidebarFooter";
import {
  LayoutDashboard,
  FileCheck,
  FileText,
  Users,
} from "lucide-react";

/**
 * Menú simplificado del admin.
 * Solo las rutas esenciales por ahora.
 */
const ADMIN_MENU_GROUPS = [
  {
    label: "Panel de Control",
    items: [
      { icon: LayoutDashboard, label: "Resumen", path: "/CoopOfi/admin/dashboard" },
    ],
  },
  {
    label: "Gestión",
    items: [
      { icon: FileCheck, label: "Créditos", path: "/CoopOfi/admin/dashboard/solicitudes-credito" },
      { icon: FileText, label: "Convenios", path: "/CoopOfi/admin/dashboard/solicitudes-convenio" },
      { icon: Users, label: "Asociados", path: "/CoopOfi/admin/dashboard/asociados" },
    ],
  },
];

const AdminSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useUIStore();

  const handleMobileClick = () => {
    if (window.innerWidth < 1024) closeSidebar();
  };

  return (
    <>
      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden 
          transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-gray-100
          flex flex-col transition-transform duration-300 ease-in-out
          shadow-2xl lg:shadow-none
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
        `}
      >
        <SidebarHeader onClose={closeSidebar} />
        <SidebarMenu groups={ADMIN_MENU_GROUPS} onMobileItemClick={handleMobileClick} />
        <SidebarFooter />
      </aside>
    </>
  );
};

export default AdminSidebar;