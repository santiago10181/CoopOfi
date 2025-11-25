import { Check } from 'lucide-react';
const Remember = () => {
    return (
    <div className="flex items-center justify-between pt-1">
        <label className="flex items-center cursor-pointer group">
            <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-4 h-4 border-2 border-gray-300 rounded peer-checked:bg-black peer-checked:border-black transition-all"></div>
                <Check className="w-3 h-3 text-white absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity" />
            </div>
            <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900 select-none">Remember me</span>
        </label>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors hover:underline">
            Forgot password?
        </a>
    </div>
    )
}
export default Remember