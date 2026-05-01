import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item, onClick }) => (
  <NavLink
    to={item.path}
    end={item.path === "/CoopOfi/dashboard"}
    onClick={onClick}
    className={({ isActive }) => `
      relative group flex items-center gap-3 px-5 py-3 rounded-2xl font-bold
      text-sm transition-all duration-200 select-none
      ${isActive
        ? "bg-black text-[#FFD700] shadow-lg shadow-black/10"
        : "text-gray-400 hover:bg-gray-100 hover:text-gray-900"
      }
    `}
  >
    {({ isActive }) => (
      <>
        {/* Indicador lateral activo */}
        {isActive && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-[#FFD700] rounded-full" />
        )}

        <item.icon
          size={18}
          strokeWidth={2.5}
          className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        />
        <span className="tracking-tight">{item.label}</span>
      </>
    )}
  </NavLink>
);
