
export const AuthInput = ({ label, icon: Icon, error, register, ...props }) => (
  <div className="w-full">
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon className={`h-5 w-5 ${error ? 'text-red-400' : 'text-gray-400'}`} />
        </div>
      )}
      <input
        {...register}
        {...props}
        className={`
          block w-full ${Icon ? 'pl-11' : 'pl-4'} pr-4 py-3.5 
          bg-gray-50 border-2 rounded-[20px] transition-all outline-none
          ${error ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#FFD700] bg-gray-100'}
        `}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1.5 ml-2 font-medium">{error.message}</p>}
  </div>
);