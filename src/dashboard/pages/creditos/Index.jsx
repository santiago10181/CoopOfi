import { CreditsHeader } from "./header/CreditsHeader";
import { useNavigate } from "react-router-dom";
import CreditHistoryTable from "./historial";

const DashboardCreditos = () =>{

    const navigate = useNavigate();
    const handleCreateRequest = () => {
        navigate('/CoopOfi/dashboard/creditos/nueva-solicitud');
        console.log("click");
        
    };
    return (
        <>
            <CreditsHeader onClick=  {handleCreateRequest}/>
            <CreditHistoryTable />
        </>
    

);
}
export default DashboardCreditos