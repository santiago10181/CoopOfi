import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {HeaderDialog} from '../../components/HeaderDialog';
import { SelectForm } from '../../components/SelectForm';
import { AUXILIOS_CONFIG } from './data_dialog';
import { InfoReq } from './components/InfoReq';
import { FooterActions } from './components/FooterActions';
import {InputFileForm} from '../../components/InputFileForm';
import {TextArea} from '../../components/TextArea';

const CreateAuxilioModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, watch, setValue, reset, formState: { errors, isSubmitting } } = useForm();

  // 👀 Observamos el campo "type" para saber qué mostrar en el segundo select
  const selectedType = watch('type');
  const selectedSubtypeId = watch('subtype');

  // Obtenemos la data derivada para mostrar requisitos
  const currentCategory = selectedType ? AUXILIOS_CONFIG[selectedType] : null;
  const currentSubtype = currentCategory?.subtypes.find(s => s.id === selectedSubtypeId);

  // Resetear el subtipo si cambia el tipo principal
  useEffect(() => {
    setValue('subtype', '');
  }, [selectedType, setValue]);

  const onSubmit = async (data) => {
    console.log("Datos del formulario:", data);
    // Simular API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    reset();
    onClose();
    // Aquí podrías disparar un toast de éxito
  };

  if (!isOpen) return null;

  return (
    // Overlay (Fondo Oscuro)
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      
      {/* Modal Container */}
      <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <HeaderDialog title="Crear Nuevo Auxilio" onClose={onClose} />

        {/* Scrollable Content */}
        <div className="px-8 pb-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* 1. SELECT TIPO (MAESTRO) */}
            <SelectForm
              label="Tipo de Auxilio"
              name="type"
              options={Object.values(AUXILIOS_CONFIG).map(type => ({ value: type.id, label: type.label }))}
              register={register}
              rules={{ required: "Selecciona un tipo de auxilio" }}
              error={errors.type}
            />

            {/* 2. SELECT SUBTIPO (DEPENDIENTE) - Animación al aparecer */}
            {selectedType && (
              <SelectForm
                label="Subtipo de Auxilio"
                name="subtype"
                options={AUXILIOS_CONFIG[selectedType].subtypes}
                register={register}
                rules={{ required: "Selecciona un subtipo" }}
                error={errors.subtype}
              />
            )}

            {/* INFO BOX: REQUISITOS (Dinámico) */}
            {currentSubtype && (
              <InfoReq currentSubtype={currentSubtype} />
            )}

            {/* 3. DESCRIPCIÓN */}
            <TextArea
              label="Descripción Adicional"
              placeholder="Proporciona detalles adicionales sobre tu solicitud..."
              register={register('description', { required: "La descripción es obligatoria" })}
              error={errors.description}
            />

            {/* 4. FILE UPLOAD (Visual) */}
            <InputFileForm
              label="Adjuntar Documento"
              name="document"
              register={register}
              rules={{ required: "Debes adjuntar un documento" }}
              error={errors.document}
            />

            {/* FOOTER ACTIONS */}
            <FooterActions onClose={onClose} isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAuxilioModal;