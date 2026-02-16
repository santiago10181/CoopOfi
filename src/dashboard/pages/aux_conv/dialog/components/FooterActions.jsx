import { ButtonNewReq } from '../../../components/ButtonNewReq'; // Reutilizamos tu botón existente
import { ButtonSubmitt } from '../../../components/ButtonSubmitt';

export const FooterActions = ({ onClose, isSubmitting,}) => {
    return (
        <div className="pt-4 flex gap-3">
            <ButtonNewReq onClick={onClose} title="Cancelar" />
                <div className="w-2/3">
                    <ButtonSubmitt isSubmitting={isSubmitting} onClick={() => alert("Formulario Enviado")} />
                </div>
        </div>
    );
};