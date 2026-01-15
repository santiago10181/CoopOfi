import { create } from 'zustand';

export const useUIStore = create((set) => ({
  // Estado inicial
  isSidebarOpen: false,

  // Acciones
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
