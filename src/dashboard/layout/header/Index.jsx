// Fíjate en las llaves { }
import { MobileMenuTrigger } from "./components/MobileMenuTrigger";
import { HeaderBrand } from "./components/HeaderBrand";
import { SearchBar } from "./components/SearchBar";
import { UserProfile } from "./components/UserProfile";

const DashboardHeader = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 transition-all duration-300 backdrop-blur-md bg-white/90 support-[backdrop-filter]:bg-white/60">
      
      {/* ZONA IZQUIERDA */}
      <div className="flex items-center gap-4">
        <MobileMenuTrigger />
        <HeaderBrand />
      </div>

      {/* ZONA DERECHA */}
      <div className="flex items-center gap-4">
        <SearchBar />
        <UserProfile />
      </div>

    </header>
  );
};
export default DashboardHeader;