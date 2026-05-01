export const SidebarGroup = ({ label, children }) => (
  <div className="mb-1">
    {/* Label del grupo */}
    <p className="px-5 mb-1.5 text-[9px] font-black text-gray-300 uppercase tracking-[0.25em] select-none">
      {label}
    </p>
    <div className="flex flex-col gap-0.5">
      {children}
    </div>
  </div>
);
