import React from 'react';
import { useForm } from 'react-hook-form';
import { HeaderDialog } from '../../components/HeaderDialog';
import { SelectForm } from '../../components/SelectForm';
import { AUXILIOS_CONFIG } from './data_dialog';
import { InfoReq } from './components/InfoReq';
import { FooterActions } from './components/FooterActions';
import { InputFileForm } from '../../components/InputFileForm';
import { TextArea } from '../../components/TextArea';
import { useSubmitForm } from '../hooks/useSubmitForm'; // 👉 Importamos TU hook

const CreateAuxilioModal = ({ isOpen, onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // 👉 Llamamos a TU hook en el nivel superior del componente
  // Asumo que devuelve una función de submit y tal vez un estado de loading
  const { submitForm, isSubmitting } = useSubmitForm(); 
  // Observamos los valores
  const selectedType = watch('type');
  const selectedSubtype = watch('subtype');

  const currentTypeConfig = selectedType ? AUXILIOS_CONFIG[selectedType] : null;

  const currentSubtype = currentTypeConfig?.subtypes.find(
    (s) => s.id === selectedSubtype
  ) ?? null;

  const subtypeOptions = currentTypeConfig
    ? currentTypeConfig.subtypes.map((s) => ({ value: s.id, label: s.label }))
    : [];

  const typeOptions = Object.entries(AUXILIOS_CONFIG).map(([key, val]) => ({
    value: key,
    label: val.label,
  }));

  // 👉 Creamos nuestra función local onSubmit
  const onSubmit = async (data) => {
    // 1. Usamos la función que te dio tu hook useSubmitForm
    // (Asumo que tu hook hace el fetch al endpoint de auxilios)
    const success = await submitForm('http://localhost:3000/api/auxilios/nueva-solicitud', data);
    
    // 2. Si el hook dice que todo salió bien...
    if (success) {
      reset(); // Limpiamos el formulario
      onSuccess(); // Avisamos al padre (cierra modal y recarga tabla)
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">

        <HeaderDialog title="Crear Nuevo Auxilio" onClose={onClose} />

        <div className="px-8 pb-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* 👉 Pasamos nuestra función local a handleSubmit */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <SelectForm label="Tipo de Auxilio" name="type" options={typeOptions} register={register} rules={{ required: 'Selecciona un tipo de auxilio' }} error={errors.type} />

            {selectedType && (
              <SelectForm label="Subtipo de Auxilio" name="subtype" options={subtypeOptions} register={register} rules={{ required: 'Selecciona un subtipo' }} error={errors.subtype} />
            )}

            {currentSubtype && (
              <InfoReq currentSubtype={currentSubtype} />
            )}

            <TextArea label="Descripción Adicional" placeholder="..." register={register('description', { required: 'La descripción es obligatoria' })} error={errors.description} />

            <InputFileForm label="Adjuntar Documento" name="document" register={register} error={errors.document} />

            <FooterActions onClose={onClose} isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAuxilioModal;