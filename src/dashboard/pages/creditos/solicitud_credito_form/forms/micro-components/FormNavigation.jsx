import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ButtonSubmitt } from '../../../../components/ButtonSubmitt';

export const FormNavigation = ({ currentStep, totalSteps, onPrev, onNext, isSubmitting }) => (
  <div className="px-8 py-6 border-t border-gray-50 flex justify-between items-center rounded-b-[2rem]">

    <button
      type="button"
      onClick={onPrev}
      className={`
        group flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm
        text-gray-400 border-2 border-gray-100
        hover:border-gray-200 hover:text-gray-900 hover:bg-gray-50 transition-all
        ${currentStep === 0 ? 'invisible' : 'visible'}
      `}
    >
      <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
      Atrás
    </button>

    {currentStep === totalSteps - 1 ? (
      <ButtonSubmitt isSubmitting={isSubmitting} />
    ) : (
      <button
        type="button"
        onClick={onNext}
        className="group bg-black text-[#FFD700] px-8 py-3 rounded-2xl font-black text-xs
                   uppercase tracking-widest shadow-lg shadow-black/15
                   hover:bg-gray-900 active:scale-95 transition-all flex items-center gap-2"
      >
        Siguiente
        <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    )}

  </div>
);
