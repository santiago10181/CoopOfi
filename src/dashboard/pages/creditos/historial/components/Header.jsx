import { FileText } from "lucide-react";
export const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-[#FFD700]" />
                    Historial de Solicitudes
                </h2>
                <p className="text-gray-500 mt-1 text-sm">
                    Gestiona y monitorea el estado de tus créditos recientes.
                </p>
            </div>
        </div>
    );
}