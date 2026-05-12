import { useState } from "react";
import { AuxConvsHeader } from "./Header/AuxConvsHeader";
import AuxConvsHistory from "./historial";
import CreateAuxilioModal from "./dialog";
import { useAuxilios } from "./hooks/useAuxilios";
// Eliminamos la importación de useSubmitForm aquí. No le pertenece al padre.

const DashboardAuxConvs = () => {
    const { auxilios, loading, error, refetch } = useAuxilios();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Esta función se la pasaremos al Modal para que la llame SOLO cuando haya terminado con éxito
    const handleSuccess = () => {
        setIsModalOpen(false); // Cierra el modal
        refetch(); // Recarga la tabla
    };
    
    return (
        <>
            <AuxConvsHeader onOpenModal={() => setIsModalOpen(true)} />
            
            
            <AuxConvsHistory data={auxilios} loading={loading} error={error} />

            <CreateAuxilioModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSuccess={handleSuccess} 
            />
        </>
    );
}

export default DashboardAuxConvs;