// src/global_hooks/AdminDashboardContext.jsx

import { createContext, useContext } from "react";

/**
 * Contexto mínimo para el módulo administrativo.
 * Solo proporciona datos básicos del admin para el sidebar.
 */
export const AdminDashboardContext = createContext(null);

export const useAdminDashboardContext = () => {
  const ctx = useContext(AdminDashboardContext);
  if (!ctx) {
    throw new Error("useAdminDashboardContext debe usarse dentro de AdminLayout");
  }
  return ctx;
};