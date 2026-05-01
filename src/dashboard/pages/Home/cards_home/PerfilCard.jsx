import { CardsHome } from "./CardsHome";

const FilaPerfil = ({ label, value }) => (
    <li className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-wider text-gray-400">{label}</span>
        <span className="font-medium text-gray-700 truncate">{value}</span>
    </li>
);

export const PerfilCard = ({ user }) => (
    <CardsHome title="Mi Perfil" variant="subtle">
        <ul className="text-sm space-y-4">
            <FilaPerfil label="Correo"       value={user.email} />
            <FilaPerfil label="Cargo"        value={user.cargo} />
            <FilaPerfil label="Rol sistema"  value={user.rol}   />
        </ul>
    </CardsHome>
);
