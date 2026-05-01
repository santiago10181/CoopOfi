export const SectionDivider = ({ title }) => (
  <div className="col-span-1 md:col-span-2 flex items-center gap-4 pt-2 pb-1">
    <div className="h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent" />
    <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.25em] px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap">
      {title}
    </span>
    <div className="h-px flex-1 bg-gradient-to-l from-gray-100 to-transparent" />
  </div>
);
