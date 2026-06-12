import { CardsHome } from "./CardsHome";

export const EnCursoCard = ({ prestamos }) => {
    const lastPrestamo = prestamos[prestamos.length - 1] || [];
        return (
        <CardsHome title="En Curso" variant="active">
            <p className="text-gray-600 font-medium">{lastPrestamo.tipo_credito || []}</p>
            <div className="mt-3 flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 p-2 rounded-lg">
                <span className="animate-pulse">●</span> {lastPrestamo.estado || []}
            </div>
        </CardsHome>
    );
};