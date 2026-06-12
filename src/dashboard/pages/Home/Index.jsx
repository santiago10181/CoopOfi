// ✅ Ya NO importa useDashboard (eso vive en el Layout ahora)
import { useDashboardContext } from "../../../global_hooks/DashboardContext";
import { CredencialCard } from "./cards_home/CredencialCard";
import { PerfilCard }     from "./cards_home/PerfilCard";
import { AccesosCard }    from "./cards_home/AccesosCard";
import { EnCursoCard }    from "./cards_home/EnCursoCard";
import { HistorialCard }  from "./cards_home/HistorialCard";

const ContentHome = () => {
    // ✅ Lee del Context, no vuelve a llamar la API
    const { userData, loading, error } = useDashboardContext();

    if (loading) return <p className="text-gray-500 p-4">Cargando...</p>;
    if (error)   return <p className="text-red-500 p-4">Error: {error}</p>;
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2"><CredencialCard user={userData} /></div>
            <PerfilCard user={userData} />
            <AccesosCard />
            <EnCursoCard    prestamos={[]} />
            <HistorialCard  prestamos={[]} />
        </div>
    );
};

export default ContentHome;
