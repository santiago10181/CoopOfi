// src/page_solicitud/components/FormSolicitudCredito.jsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../../components/InputForm'; 
import { SelectForm } from '../../../components/SelectForm';
import { ButtonSubmitt } from '../../../components/ButtonSubmitt';
import { Index } from '../data/Index';
import { useSubmitForm } from '../../hooks/useSubmitForm';
import { OrigenFondosField } from '../extra_components/OrigenFondosField';
import { InputFileForm } from '../../../components/InputFileForm';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const FormSolicitudCredito = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const { register, handleSubmit, trigger, formState: { errors, isSubmitting } } = useForm({ 
        mode: 'onChange',
        shouldUnregister: false // Mantiene los datos al cambiar de paso
    });

    const totalSteps = Index.length;
    const currentSection = Index[currentStep];

    const nextStep = async () => {
        const fieldsInSection = currentSection.fields.map(f => f.name);
        const isStepValid = await trigger(fieldsInSection);
        if (isStepValid) {
            setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
            // Scroll al inicio del área de inputs solamente
            document.getElementById('form-scroll-area').scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        // flex-1 y min-h-0 permiten que el contenedor hijo sepa que debe limitarse
        <div className="flex flex-col h-full flex-1 min-h-0 overflow-hidden">
            
            {/* Stepper Slim - Ocupa poco espacio vertical */}
            <div className="px-8 pt-6 pb-2 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-[#FFD700] transition-all duration-700 ease-in-out"
                            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                        />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 whitespace-nowrap uppercase tracking-tighter">
                        {currentStep + 1} / {totalSteps}
                    </span>
                </div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight">{currentSection.sectionTitle}</h3>
            </div>

            {/* FORMULARIO: El área que realmente hace scroll */}
            <form onSubmit={handleSubmit(useSubmitForm)} className="flex-1 flex flex-col min-h-0 overflow-hidden">
                
                <div id="form-scroll-area" className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
                    <div key={currentSection.id} className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                            {currentSection.fields.map((field) => {
                                const commonProps = {
                                    ...field, // Pasamos todas las propiedades del Index directamente
                                    register: register,
                                    error: errors[field.name],
                                };

                                if (field.name === 'sol_origen_fondos') {
                                    return (
                                        <OrigenFondosField key={field.name}>
                                            <InputForm {...commonProps} label="" />
                                        </OrigenFondosField>
                                    );
                                }

                                if (field.componentType === 'select') {
                                    return <SelectForm key={field.name} {...commonProps} />;
                                }

                                return field.type === "file" 
                                    ? <InputFileForm key={field.name} {...commonProps} /> 
                                    : <InputForm key={field.name} {...commonProps} />;
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer de Navegación Fijo abajo del Card */}
                <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center shrink-0">
                    <button
                        type="button"
                        onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
                        className={`group flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-slate-400 transition-all hover:text-slate-900 ${
                            currentStep === 0 ? 'invisible' : 'visible'
                        }`}
                    >
                        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
                        Atrás
                    </button>

                    {currentStep === totalSteps - 1 ? (
                        <ButtonSubmitt isSubmitting={isSubmitting && (alert("Formulario Enviado"))} />
                    ) : (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-slate-900 text-[#FFD700] px-10 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-900/10 hover:bg-black active:scale-95 transition-all flex items-center gap-2"
                        >
                            Siguiente <ChevronRight size={18} />
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
export default FormSolicitudCredito