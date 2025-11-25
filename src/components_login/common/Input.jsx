import { forwardRef } from 'react';

export const Input = forwardRef(
  ({ label, error, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <label className="block text-sm font-semibold text-gray-700 ml-1">
          {label}
        </label>
        <div className="relative group">
          <input
            ref={ref}
            className={`
              w-full px-4 py-3.5 bg-gray-50 border-2 rounded-xl transition-all duration-200
              placeholder-gray-400 text-gray-900 text-base
              focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-yellow/10
              ${error 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-gray-100 focus:border-brand-yellow group-hover:border-gray-300'}
              ${icon ? 'pl-11' : ''}
              ${className}
            `}
            {...props}
          />
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-600 transition-colors">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-500 ml-1 animate-fadeIn">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
