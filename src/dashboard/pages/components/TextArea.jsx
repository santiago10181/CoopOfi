export const TextArea = ({ label, placeholder, name, register, rules, error }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">{label}</label>
            <textarea 
               {...register(name, rules)}
                placeholder={placeholder}
                className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-[#FFD700] rounded-2xl outline-none font-medium text-gray-700 min-h-[100px] resize-none transition-all"
            />
            {error && <span className="text-red-500 text-xs font-bold ml-2">{error.message}</span>}
        </div>
    );
};