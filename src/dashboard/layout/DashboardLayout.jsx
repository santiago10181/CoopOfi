import { Outlet } from "react-router-dom";

// 🚨 CAMBIO CLAVE: Importamos desde las CARPETAS (React buscará automáticamente el index.jsx)
import Sidebar from "./sidebar"; 
import DashboardHeader from "./header";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* 1. NAVEGACIÓN LATERAL (Controlada por Zustand) */}
      <Sidebar />

      {/* 2. COLUMNA PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        
        {/* A. BARRA SUPERIOR */}
        {/* <DashboardHeader /> */}

        {/* B. CONTENIDO DE LA PÁGINA */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default DashboardLayout;