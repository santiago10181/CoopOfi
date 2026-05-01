import { Link } from "react-router-dom";  // ← Cambio clave
import { CardsHome } from "./CardsHome";

const accesos = [
    { icon: "💰", label: "Solicitar Crédito",  to: "/CoopOfi/dashboard/creditos/nueva-solicitud" },
    { icon: "🏦", label: "Solicitar Convenio", to: "/CoopOfi/dashboard/auxilios-convenios" },
    { icon: "📄", label: "Estado de Cuenta",   to: "/CoopOfi/dashboard/estado-cuenta" },
];

export const AccesosCard = () => (
    <CardsHome title="Accesos Rápidos" variant="active">
        <ul className="text-sm space-y-3">
            {accesos.map(({ icon, label, to }) => (
                <Link key={label} to={to} 
                    className="flex items-center gap-3 hover:opacity-70 transition-opacity">
                    <span>{icon}</span>
                    <span className="text-gray-700 font-medium">{label}</span>
                </Link>
            ))}
        </ul>
    </CardsHome>
);
