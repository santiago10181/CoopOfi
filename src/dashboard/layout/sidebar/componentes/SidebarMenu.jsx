import {SidebarItem} from "./SidebarItem";

export const SidebarMenu = ({ items, onMobileItemClick }) => (
  <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
    {items.map((item) => (
      <SidebarItem 
        key={item.path} 
        item={item} 
        onClick={onMobileItemClick} 
      />
    ))}
  </nav>
);