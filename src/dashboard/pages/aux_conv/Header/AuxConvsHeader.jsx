// src/pages/dashboard/auxilios/Header/AuxConvsHeader.jsx
import { ButtonNewReq } from '../../components/ButtonNewReq'; // Ajusta la ruta si es necesario

// 👇 Recibimos la prop onOpenModal
export const AuxConvsHeader = ({ onOpenModal }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
      
      <div className="w-full md:w-auto text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Auxilios y Convenios
        </h1>
        <p className="text-gray-500 mt-1 font-medium">
          Gestiona tus beneficios y solicitudes
        </p>
      </div>

      {/* 👇 Conectamos el evento click del botón a la función que nos pasó el padre */}
      <ButtonNewReq onClick={onOpenModal} />
      
    </div>
  );
};