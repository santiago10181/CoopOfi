import { STEPS } from './stepsConfig';

export const StepperVertical = ({ currentStep, totalSteps, onGoBack }) => (
  <nav className="flex flex-col gap-1 mt-2">
    {STEPS.map((step, index) => {
      const Icon        = step.icon;
      const isCompleted = index < currentStep;
      const isCurrent   = index === currentStep;
      const isLast      = index === totalSteps - 1;

      return (
        <div key={index} className="flex gap-3 items-stretch">

          {/* Columna: ícono + línea */}
          <div className="flex flex-col items-center pl-6 shrink-0">
            <button
              type="button"
              onClick={() => isCompleted && onGoBack(index)}
              disabled={!isCompleted}
              className={`
                w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0
                transition-all duration-300 z-10
                ${isCurrent   ? 'bg-black shadow-lg shadow-black/20 scale-110' : ''}
                ${isCompleted ? 'bg-emerald-100 cursor-pointer hover:bg-emerald-200' : ''}
                ${!isCurrent && !isCompleted ? 'bg-gray-100 cursor-default' : ''}
              `}
            >
              {isCompleted ? (
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <Icon
                  size={13}
                  strokeWidth={2.5}
                  className={isCurrent ? 'text-[#FFD700]' : 'text-gray-300'}
                />
              )}
            </button>

            {!isLast && (
              <div className={`
                w-px flex-1 min-h-[10px] my-1 rounded-full transition-colors duration-500
                ${index < currentStep ? 'bg-emerald-200' : 'bg-gray-100'}
              `} />
            )}
          </div>

          {/* Label */}
          <button
            type="button"
            onClick={() => isCompleted && onGoBack(index)}
            disabled={!isCompleted}
            className={`
              flex-1 flex items-center text-left py-2 pr-4 rounded-[14px]
              transition-all duration-200 font-bold text-xs
              ${isCurrent   ? 'text-gray-900'   : ''}
              ${isCompleted ? 'text-emerald-500 cursor-pointer hover:text-emerald-700' : ''}
              ${!isCurrent && !isCompleted ? 'text-gray-300 cursor-default' : ''}
            `}
          >
            {step.label}
          </button>

        </div>
      );
    })}
  </nav>
);
