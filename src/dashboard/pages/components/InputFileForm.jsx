import { CloudUpload } from "lucide-react"; // Importar si es posible, si no, usar SVG

export const InputFileForm = ({ label, name, register, rules, error, className = "", ...props}) => {
  return (
    <div className={`w-full group ${className}`}>
        {label && (
          <label htmlFor={name} className="block mb-2.5 text-xs font-black text-slate-500 uppercase tracking-widest">
            {label}
          </label>
        )}
        
        <div className={`
            relative flex flex-col items-center justify-center p-6 rounded-2xl
            border-2 border-dashed transition-all duration-300 bg-slate-50/30
            ${error 
                ? 'border-red-200 bg-red-50' 
                : 'border-slate-200 hover:border-[#FFD700] hover:bg-yellow-50/30 group-focus-within:border-[#FFD700]'}
        `}>
            {/* Icono de subida sutil */}
            <div className="mb-2 text-slate-400 group-hover:text-[#FFD700] transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
            </div>

            <input
              id={name}
              type="file"
              {...(register && register(name))}
              className="
                block w-full text-sm text-slate-500 cursor-pointer
                file:mr-4 file:py-2 file:px-6
                file:rounded-full file:border-0
                file:text-xs file:font-black file:uppercase file:tracking-tighter
                file:bg-slate-900 file:text-white
                hover:file:bg-[#FFD700] hover:file:text-black
                file:transition-all file:duration-300
                focus:outline-none
              "
              {...props}
            />
            <p className="mt-2 text-[10px] text-slate-400 font-medium">PDF, JPG o PNG (Máx. 5MB)</p>
        </div>

        {error && (
          <p className="mt-2 text-[11px] font-bold text-red-500 flex items-center gap-1.5 ml-1">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"/>
            {error.message}
          </p>
        )}
    </div>
  );  
};