import { CreditsHeader } from "./header/CreditsHeader";
import { useNavigate } from "react-router-dom";
import CreditHistoryTable from "./historial";
import { useCreditos } from "./hooks/useCreditos";
import {PageLoader} from "../components/PageLoader";

const DashboardCreditos = () => {
  const navigate = useNavigate();
  const { creditos, loading, error } = useCreditos(); // ← Ahora sí se usa
    
  const handleCreateRequest = () => {
    navigate('/CoopOfi/dashboard/creditos/nueva-solicitud');
  };

  if (loading) return <PageLoader />;
  if (error)   return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <>
      <CreditsHeader onClick={handleCreateRequest} />
      <CreditHistoryTable creditos={creditos} /> {/* ← Datos reales */}
    </>
  );
};

export default DashboardCreditos;
