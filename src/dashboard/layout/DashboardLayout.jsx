// dashboard/layout/DashboardLayout.jsx
import { Outlet }           from 'react-router-dom';
import Sidebar              from './sidebar';
import { DashboardContext } from '../../global_hooks/UserContext';
import { useDashboard }     from './hooks/useDashboard'; // Nuevo hook para cargar userData al entrar al dashboard

const DashboardLayout = () => {
  // ✅ Se llama UNA SOLA VEZ al entrar al dashboard
  const { userData, loading, error } = useDashboard();

  return (
    <DashboardContext.Provider value={{ userData, loading, error }}>
      <div className="flex min-h-screen bg-[#F8F9FA]">
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
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
