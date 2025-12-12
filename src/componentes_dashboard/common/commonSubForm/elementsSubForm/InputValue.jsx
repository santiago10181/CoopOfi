// InputNum.jsx (válido también para InputValue)
import { useFormContext } from "react-hook-form";

const InputNum = ({ name, label, type = "text", placeholder }) => {
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

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full p-2.5 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-150 ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputNum;
