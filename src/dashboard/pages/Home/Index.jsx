import { useDashboardContext } from "../../../global_hooks/DashboardContext";
import { CredencialCard } from "./cards_home/CredencialCard";
import { PerfilCard }     from "./cards_home/PerfilCard";
import { AccesosCard }    from "./cards_home/AccesosCard";
import { EnCursoCard }    from "./cards_home/EnCursoCard";
import { HistorialCard }  from "./cards_home/HistorialCard";

const SkeletonCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div className="h-8 bg-gray-200 rounded w-2/3 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const ContentHome = () => {
    const { userData, loading, error } = useDashboardContext();

    if (loading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2"><SkeletonCard /></div>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      );
    }

    if (error) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 flex items-center gap-3">
          <span className="font-bold">Error de conexión:</span>
          <span>{error}</span>
        </div>
      );
    }
    
    // 🚀 MEJORA: Guardia de seguridad. Si no hay error ni loading, pero userData es null, 
    // mostramos un mensaje amable en lugar de romper la app.
    if (!userData) {
      return (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700">
          No se encontró información del usuario.
        </div>
      );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CredencialCard user={userData} />
            </div>
            
            <PerfilCard user={userData} />
            <AccesosCard user={userData} />
            <EnCursoCard user={userData} />
            <HistorialCard user={userData} />
        </div>
    );
};

export default ContentHome;