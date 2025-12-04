import { useState } from "react";
import TextInfoBtn from "../../componentes_dashboard/common/TextsBtn.jsx";
import BtnModal from "../../componentes_dashboard/common/BtnModal.jsx";
import Modal from "../FormSolicitud/Modal.jsx";

const BtnNuevaSolicitud = () => {
  const [showModal, setShowModal] = useState(false);

  const handleNuevaSolicitud = prev => setShowModal(!prev);
  
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Encabezado + botón */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <TextInfoBtn />
        <BtnModal
          onClick={handleNuevaSolicitud}
          text="Nueva Solicitud de Crédito"
          value={showModal}
        />
        {showModal && <Modal onClick={handleNuevaSolicitud} />}
      </div>

      {/* aquí va el bloque del historial que te puse en la sección anterior */}
    </div>
  );
};
export default BtnNuevaSolicitud;