import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item, onClick }) => {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/dashboard"}
      onClick={onClick}
      className={({ isActive }) => `
        group flex items-center gap-4 px-6 py-4 rounded-[20px] font-bold transition-all duration-200
        ${isActive 
          ? "bg-black text-[#FFD700] shadow-xl shadow-black/10 translate-x-1" 
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:pl-7"
        }
      `}
    >
      <item.icon 
        size={22} 
        strokeWidth={2.5} 
        className="transition-transform group-hover:scale-110" 
      />
      <span className="text-sm">{item.label}</span>
    </NavLink>
  );
};
