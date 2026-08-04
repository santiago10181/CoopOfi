// src/dashboard/admin/layout/AdminLayout.jsx

import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebarAdmin/AdminSidebar";
import { AdminDashboardContext } from "../../../global_hooks/AdminDashboardContext";
import { useAdminDashboard } from "../../../global_hooks/useAdminDashboard";
import DashboardHeader from "../header/Index";

/**
 * Layout mínimo del admin.
 * Solo sidebar + header + área de contenido vacía.
 */
const AdminLayout = () => {
  const { adminData, loading, error } = useAdminDashboard();

  return (
    <AdminDashboardContext.Provider value={{ adminData, loading, error }}>
      <div className="flex min-h-screen bg-[#F8F9FA]">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader />
          <main className="flex-1 p-4 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </AdminDashboardContext.Provider>
  );
};

export default AdminLayout;