// src/page_login/components/AuthInput.jsx

/**
 * Campo de autenticación integrado con React Hook Form.
 *
 * `register` contiene los eventos y referencias que React Hook Form necesita
 * para registrar el input y aplicar sus reglas de validación.
 */
export const AuthInput = ({
  id,
  label,
  icon: Icon,
  error,
  register,
  ...props
}) => {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <div className="relative">
        {Icon ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Icon
              aria-hidden="true"
              className={`h-5 w-5 ${
                error ? "text-red-400" : "text-gray-400"
              }`}
            />
          </div>
        ) : null}

        <input
          {...register}
          {...props}
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={`
            block w-full rounded-[20px] border-2 py-3.5 pr-4 outline-none transition-all
            ${Icon ? "pl-11" : "pl-4"}
            ${
              error
                ? "border-red-500 bg-red-50"
                : "border-transparent bg-gray-100 focus:border-[#FFD700]"
            }
          `}
        />
      </div>

      {error ? (
        <p
          id={errorId}
          role="alert"
          className="ml-2 mt-1.5 text-xs font-medium text-red-500"
        >
          {error.message}
        </p>
      ) : null}
    </div>
  );
};