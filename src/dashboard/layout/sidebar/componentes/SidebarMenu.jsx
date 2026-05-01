import { SidebarItem }  from "./SidebarItem";
import { SidebarGroup } from "./SidebarGroup";

export const SidebarMenu = ({ groups, onMobileItemClick }) => (
  <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-4">
    {groups.map((group) => (
      <SidebarGroup key={group.label} label={group.label}>
        {group.items.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            onClick={onMobileItemClick}
          />
        ))}
      </SidebarGroup>
    ))}
  </nav>
);
