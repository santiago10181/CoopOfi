// SelectOptions.jsx
import { useFormContext } from "react-hook-form";

const SelectOptions = ({ name, label, options }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors?.[name]?.message;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <select
        id={name}
        {...register(name)} // Conecta con RHF
        className={`w-full p-2.5 bg-white border rounded-md text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      >
        <option value="">-- Elige una --</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectOptions;
