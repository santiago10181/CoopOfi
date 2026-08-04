import { ButtonNewReq } from '../../../components/ButtonNewReq';
import { ButtonSubmitt } from '../../../components/ButtonSubmitt';

export const FooterActions = ({ onClose, isSubmitting }) => {
  return (
    <div className="pt-4 flex gap-3">
      <ButtonNewReq
        type="button"
        onClick={onClose}
        title="Cancelar"
        disabled={isSubmitting}
      />

      <div className="w-2/3">
        <ButtonSubmitt isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};