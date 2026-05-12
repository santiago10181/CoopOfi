import { ButtonNewReq } from '../../../components/ButtonNewReq';
import { ButtonSubmitt } from '../../../components/ButtonSubmitt';

export const FooterActions = ({ onClose, isSubmitting }) => {
  return (
    <div className="pt-4 flex gap-3">
      <ButtonNewReq onClick={onClose} title="Cancelar" />
      <div className="w-2/3">
        {/* Sin onClick: el submit lo maneja el <form> con handleSubmit */}
        <ButtonSubmitt isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};