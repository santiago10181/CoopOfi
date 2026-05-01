import { StepperVertical } from './StepperVertical';

export const SidebarSolicitud = ({ currentStep, totalSteps, onGoBack }) => (
  <div className="sticky top-6">
    <aside className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-black/5 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none select-none">
            Coop<span className="text-[#FFD700]">Ofi</span>
          </h1>
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
            Solicitud de Crédito
          </p>
        </div>
        <div className="h-8 w-1 bg-[#FFD700] rounded-full" />
      </div>

      {/* Progreso */}
      <div className="px-8 pt-5 pb-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Progreso</span>
          <span className="text-[9px] font-black text-gray-400">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FFD700] to-yellow-300 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Stepper */}
      <div className="px-2 py-4 pb-6">
        <StepperVertical
          currentStep={currentStep}
          totalSteps={totalSteps}
          onGoBack={onGoBack}
        />
      </div>

    </aside>
  </div>
);
