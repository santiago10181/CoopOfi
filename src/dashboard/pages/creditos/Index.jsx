import { CreditsHeader } from "./header/CreditsHeader";
import { useNavigate } from "react-router-dom";

const DashboardCreditos = () =>{

    const navigate = useNavigate();
    const handleCreateRequest = () => {
        navigate('/dashboard/creditos/nueva-solicitud');
        console.log("click");
        
    };
    return <CreditsHeader onClick=  {handleCreateRequest}/>;
}
export default DashboardCreditos