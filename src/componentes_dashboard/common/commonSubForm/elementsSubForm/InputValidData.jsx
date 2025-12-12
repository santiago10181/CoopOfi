// TermsCheckboxRHF.jsx
import { useFormContext } from "react-hook-form";

const TermsCheckbox = ({
  name = "acceptTerms",
  label = "Acepto los términos y condiciones",
  className
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[name]?.message;

  return (
    <div className="flex flex-col gap-1">
      <label className={`flex items-start gap-2 cursor-pointer select-none ${className}`}>
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          {...register(name)}
        />
        <span className="text-sm text-gray-700">
          {label}
        </span>
      </label>

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default TermsCheckbox;
