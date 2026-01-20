// src/pages/dashboard/credits/components/CreditsHeader.jsx
import {ButtonNewReq} from '../../components/ButtonNewReq';

export const CreditsHeader = ({ onClick }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
      
      {/* TEXTOS 
          - text-center: Centrado obligatorio en móvil.
          - md:text-left: Alineado a la izquierda en PC.
          - w-full md:w-auto: Ocupa todo el ancho en móvil para centrar el texto correctamente.
      */}
      <div className="w-full md:w-auto text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Mis Créditos
        </h1>
        <p className="text-gray-500 mt-1 font-medium">
          Resumen financiero y solicitudes
        </p>
      </div>

      {/* BOTÓN 
          - items-center (en el padre) asegura que este botón esté centrado horizontalmente en móvil.
          - shrink-0: Evita que el botón se deforme.
      */}
      <ButtonNewReq onClick={onClick} />
    </div>
  );
};  