import { useState } from "react";
import { AuxConvsHeader } from "./Header/AuxConvsHeader";
import AuxConvsHistory from "./historial";
import CreateAuxilioModal from "./dialog"; // 👈 Asegúrate de la ruta correcta

const DashboardAuxConvs = () => {
    // 1. Estado para controlar si el modal se ve o no
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* 2. Pasamos la función para abrir al Header */}
            <AuxConvsHeader onOpenModal={() => setIsModalOpen(true)} />
            
            <AuxConvsHistory />

            {/* 3. Renderizamos el Modal condicionado al estado */}
            <CreateAuxilioModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}

export default DashboardAuxConvs;