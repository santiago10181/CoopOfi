import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { HeaderDialog } from '../../components/HeaderDialog';
import { SelectForm } from '../../components/SelectForm';
import { TextArea } from '../../components/TextArea';

import { InfoReq } from './components/InfoReq';
import { FooterActions } from './components/FooterActions';

import { useSubmitAuxilioForm } from '../hooks/useSubmitForm';
import { useConveniosDisponibles } from '../hooks/useConveniosDisponibles';

const CreateAuxilioModal = ({ isOpen, onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      convenioid: '',
      description: '',
    },
  });

  const { submitForm, isSubmitting } = useSubmitAuxilioForm();

  const {
    convenios,
    loading: loadingConvenios,
    error: errorConvenios,
  } = useConveniosDisponibles();

  const selectedConvenioId = watch('convenioid');

  const convenioOptions = useMemo(() => {
    return convenios.map((convenio) => ({
      value: String(convenio.id),
      label: convenio.nombre,
    }));
  }, [convenios]);

  const currentConvenio = useMemo(() => {
    return (
      convenios.find(
        (convenio) => String(convenio.id) === String(selectedConvenioId)
      ) ?? null
    );
  }, [convenios, selectedConvenioId]);

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const handleClose = () => {
    if (isSubmitting) return;

    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    const result = await submitForm(
      'http://localhost:3000/api/auxilios/nueva-solicitud',
      data
    );

    if (!result.success) {
      alert(result.message);
      return;
    }

    reset();
    onSuccess();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-[32px] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <HeaderDialog
          title="Crear Nueva Solicitud"
          onClose={handleClose}
        />

        <div className="px-8 pb-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {loadingConvenios && (
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
                Cargando auxilios y convenios disponibles...
              </div>
            )}

            {!loadingConvenios && errorConvenios && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {errorConvenios}
              </div>
            )}

            {!loadingConvenios && !errorConvenios && convenioOptions.length === 0 && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                No hay auxilios o convenios activos disponibles para tu organización.
              </div>
            )}

            {!loadingConvenios && !errorConvenios && convenioOptions.length > 0 && (
              <SelectForm
                label="Auxilio / convenio"
                name="convenioid"
                options={convenioOptions}
                register={register}
                rules={{
                  required: 'Selecciona un auxilio o convenio',
                }}
                error={errors.convenioid}
              />
            )}

            {currentConvenio && (
              <InfoReq currentSubtype={currentConvenio} />
            )}

            <TextArea
              label="Descripción adicional"
              placeholder="Describe brevemente tu solicitud..."
              name="description"
              register={register}
              rules={{
                required: 'La descripción es obligatoria',
                minLength: {
                  value: 10,
                  message:
                    'Escribe una descripción de al menos 10 caracteres',
                },
              }}
              error={errors.description}
            />

            <FooterActions
              onClose={handleClose}
              isSubmitting={
                isSubmitting ||
                loadingConvenios ||
                convenioOptions.length === 0
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAuxilioModal;