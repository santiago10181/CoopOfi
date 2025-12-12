// InputFile.jsx
import { useFormContext } from "react-hook-form";

const InputFile = ({
  name,
  label,
  accept = "",
  helperText,
  required = false,
}) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const error = errors?.[name]?.message;
  const file = watch(name);

  const handleChange = (event) => {
    const selectedFile = event.target.files?.[0] ?? null;
    setValue(name, selectedFile, { shouldValidate: true, shouldTouch: true });
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-slate-700"
        >
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div className="flex items-center gap-3">
        <label
          htmlFor={name}
          className={`
            inline-flex items-center justify-center px-3 py-2
            text-sm font-medium rounded-md cursor-pointer
            border border-slate-300 bg-white text-slate-700
            hover:bg-slate-50
            focus-within:outline-none focus-within:ring-2
            focus-within:ring-blue-500 focus-within:border-blue-500
          `}
        >
          Seleccionar archivo
          <input
            id={name}
            type="file"
            accept={accept}
            className="hidden"
            onChange={handleChange}
          />
        </label>

        <span className="text-xs text-slate-500 truncate">
          {file?.name || "Ningún archivo seleccionado"}
        </span>
      </div>

      {helperText && !error && (
        <p className="text-[11px] text-slate-500 mt-0.5">{helperText}</p>
      )}

      {error && (
        <p className="text-[11px] text-red-500 mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputFile;
