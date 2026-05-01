export const SectionHeader = ({ title }) => (
  <div className="px-8 pt-8 pb-5 border-b border-gray-50">
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 bg-[#FFD700] rounded-full shrink-0" />
      <h3 className="text-base font-black text-gray-900 tracking-tight">{title}</h3>
    </div>
  </div>
);
