// src/dashboard/pages/home/Index.jsx
import { CardsHome } from "./cards_home/CardsHome";

const ContentHome = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. CREDENCIAL: Pasamos title y contenido como children */}
            <CardsHome title="Mi Credencial" variant="primary">
                <p className="opacity-90">Santiago User</p>
                <p className="text-sm opacity-75">ID: #10181</p>
                <div className="mt-4 inline-block px-2 py-1 bg-white/20 rounded text-xs font-bold">
                    ACTIVO
                </div>
            </CardsHome>

            {/* 2. RASTREADOR */}
            <CardsHome title="En Curso" variant="active">
                <p className="text-gray-600 font-medium">Crédito de Libranza</p>
                <div className="mt-3 flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 p-2 rounded-lg">
                    <span className="animate-pulse">●</span> En Estudio
                </div>
            </CardsHome>

            {/* 3. HISTORIAL */}
            <CardsHome title="Historial Reciente" variant="subtle">
                <ul className="text-sm space-y-3">
                    <li className="flex items-center gap-2">
                        <span>✅</span> Auxilio Educativo
                    </li>
                    <li className="flex items-center gap-2 text-gray-400">
                        <span>⚪</span> Crédito Vacacional
                    </li>
                </ul>
            </CardsHome>

        </div>
    );
};

export default ContentHome;