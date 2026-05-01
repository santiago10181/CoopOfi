import { CardsHome } from "./CardsHome";

export const CredencialCard = ({ user }) => {

    return (
    <CardsHome title="Mi Credencial" variant="primary">
        <p className="text-2xl font-bold opacity-95">{user.name}</p>
        <p className="text-sm opacity-60 mt-1">{user.cargo}</p>

        <div className="border-t border-white/20 my-3" />

        <div className="flex items-center justify-between">
            <div>
                <p className="text-xs opacity-50 uppercase tracking-wider">ID Asociado</p>
                <p className="text-sm font-mono font-bold opacity-90">#{user.id}</p>
            </div>
            <div>
                <p className="text-xs opacity-50 uppercase tracking-wider">Rol</p>
                <p className="text-sm font-bold capitalize opacity-90">{user.rol}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase
                ${user.activo ? 'bg-emerald-400/20 text-emerald-300' : 'bg-red-400/20 text-red-300'}`}>
                {user.activo ? '● Activo' : '● Inactivo'}
            </span>
        </div>
    </CardsHome>
    );
}

    

