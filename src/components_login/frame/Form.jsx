import { Mail, Lock, ArrowRight, Check, Eye, EyeOff } from 'lucide-react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { useState } from 'react';
import handleSubmit from '../controllers/HandleSubmit';
import handleInputChange from '../controllers/HandleInput';
import validateForm from '../controllers/ValidateForm';
import Remember from './Remember';

const Form = () => {

const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [formData, setFormData] = useState({ email: '', password: '' });
const [errors, setErrors] = useState({ email: '', password: '' });

    return (
        <form onSubmit={(e) => handleSubmit(e, validateForm(formData,setErrors), setIsLoading)} className="space-y-6">
            <Input 
                label="Member Email"
                name="email"
                type="email"
                placeholder="name@cooperative.com"
                icon={<Mail className="w-5 h-5" />}
                value={formData.email}
                onChange={(e) => handleInputChange(e,setFormData,setErrors,errors)}
                error={errors.email}
            />
                
            <div className="relative">
                <Input 
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    icon={<Lock className="w-5 h-5" />}
                    value={formData.password}
                    onChange={(e) => handleInputChange(e,setFormData,setErrors,errors)}
                    error={errors.password}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-[40px] text-gray-400 hover:text-gray-600 focus:outline-none p-1"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            </div>
            <Remember />
            <Button 
            type="submit" 
            fullWidth 
            isLoading={isLoading}
            className="mt-2 py-4 text-base shadow-lg hover:shadow-xl bg-black hover:bg-gray-900"
            >
            Sign In to Dashboard <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
        </form>
    )
}

export default Form