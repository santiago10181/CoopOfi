import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2.5 border border-gray-100 focus-within:border-gray-300 focus-within:bg-white focus-within:shadow-sm transition-all duration-200 w-64">
      <Search size={18} className="text-gray-400" />
      <input 
        type="text" 
        placeholder="Buscar trámites..." 
        className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder-gray-400 text-gray-700"
      />
    </div>
  );
};
