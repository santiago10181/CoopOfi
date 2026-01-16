import { useForm, useWatch } from "react-hook-form";
import { Send, Plus } from "lucide-react";

export const ChatInput = () => {
  const { register, handleSubmit, reset, control } = useForm({ mode: "onChange" });
  const message = useWatch({ control, name: "message" });
  const isValid = message?.trim().length > 0;

  const onSubmit = (data) => {
    if (!data.message?.trim()) return;
    console.log("Enviado:", data.message);
    reset();
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-6">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className={`
          relative flex items-center gap-2 p-2 rounded-full border transition-all duration-300 bg-white
          ${isValid ? "shadow-md border-gray-200" : "shadow-sm border-gray-100"}
          focus-within:shadow-lg focus-within:border-[#FFD500]/30
        `}
      >
        <input
          type="text"
          placeholder="Escribe un mensaje a CoopOfi..."
          autoComplete="off"
          className="flex-1 bg-transparent text-gray-700 placeholder:text-gray-400 text-sm focus:outline-none px-2"
          {...register("message", { required: true })}
        />
        
        <button 
          type="submit"
          disabled={!isValid}
          className={`
            p-2 rounded-full transition-all duration-200 flex items-center justify-center
            ${isValid 
              ? "bg-[#FFD500] text-gray-900 translate-x-0 opacity-100" 
              : "bg-transparent text-gray-300 translate-x-2 opacity-0 pointer-events-none w-0 p-0 overflow-hidden"}
          `}
        >
          <Send size={18} />
        </button>
      </form>
      
      <p className="text-center text-[10px] text-gray-300 mt-3">
        CoopOfi AI puede cometer errores.
      </p>
    </div>
  );
};