import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar'; // Ajusta si la carpeta es 'sidebar' o 'components/sidebar'
import { DashboardContext } from '../../global_hooks/DashboardContext';
import { useDashboard } from '../../global_hooks/useDashboard';
import DashboardHeader from '../layout/header/Index'; // <-- IMPORTAMOS TU HEADER

const DashboardLayout = () => {
  const { userData, loading, error } = useDashboard();

  return (
    <DashboardContext.Provider value={{ userData, loading, error }}>
      <div className="flex min-h-screen bg-[#F8F9FA]">
        <Sidebar />

        {/* Contenedor de la columna derecha */}
        <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
          
          {/* AQUÍ INTEGRAMOS TU DASHBOARDHEADER */}
          <DashboardHeader />

          {/* Área de contenido dinámico */}
          <main className="flex-1 p-4 lg:p-8 overflow-y-auto overflow-x-hidden">
            <div className="max-w-7xl mx-auto w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;