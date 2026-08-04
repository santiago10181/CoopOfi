// dashboard/components/FormSolicitudCredito.jsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // <-- Importación añadida
import { Index as InitialIndex } from "../data/Index";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { FormResultModal } from "../../../components/FormResultModal";
import { SidebarSolicitud } from "./micro-components/SidebarSolicitud";
import { SectionHeader } from "./micro-components/SectionHeader";
import { FieldRenderer } from "./micro-components/FieldRenderer";
import { FormNavigation } from "./micro-components/FormNavigation";
import { useAutoFillFormFromUser } from "../../hooks/useAutoFillFormFromUser";

const FormSolicitudCredito = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate(); // <-- Hook añadido
  
  // Estado local para mantener el Index dinámico
  const [dynamicIndex, setDynamicIndex] = useState(InitialIndex);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange", shouldUnregister: false });

  const { loading, error, userData } = useAutoFillFormFromUser(reset, dynamicIndex);

  useEffect(() => {
    if (userData?.lineasCredito && userData.lineasCredito.length > 0) {
      setDynamicIndex(prevIndex => {
        const newIndex = JSON.parse(JSON.stringify(prevIndex));
        const datosGeneralesSection = newIndex.find(sec => sec.id === "datos_generales");
        if (datosGeneralesSection) {
          const lineasField = datosGeneralesSection.fields.find(f => f.name === "sol_id_linea_credito");
          if (lineasField) {
            lineasField.options = userData.lineasCredito;
          }
        }
        return newIndex;
      });
    }
  }, [userData]);

  const { onSubmit, modalStatus, modalMessage, closeModal, retryForm } = useSubmitForm();

  const totalSteps = dynamicIndex.length;
  const currentSection = dynamicIndex[currentStep];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const nextStep = async () => {
    const fieldNames = currentSection.fields
      .filter((f) => f.componentType !== "divider")
      .map((f) => f.name);
    const isValid = await trigger(fieldNames);
    if (isValid) {
      setCurrentStep((p) => Math.min(p + 1, totalSteps - 1));
      scrollToTop();
    }
  };

  const prevStep = () => {
    setCurrentStep((p) => Math.max(p - 1, 0));
    scrollToTop();
  };

  const goToStep = (s) => {
    setCurrentStep(s);
    scrollToTop();
  };

  // ✅ Lógica para cerrar el modal y redirigir si fue exitoso
  const handleCloseModal = () => {
    closeModal();
    if (modalStatus === "success") {
      // Ajusta esta ruta a la ruta real de tu dashboard de créditos
      navigate("/CoopOfi/dashboard/creditos"); 
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <p className="text-gray-400 text-sm animate-pulse">Cargando datos del usuario...</p>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <p className="text-red-400 text-sm">⚠️ {error}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
      <SidebarSolicitud
        currentStep={currentStep}
        totalSteps={totalSteps}
        onGoBack={goToStep}
      />

      <div className="bg-white rounded-[2rem] shadow-xl shadow-black/5 border border-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <SectionHeader title={currentSection.sectionTitle} />

          <div className="px-8 py-8">
            <div
              key={currentSection.id}
              className="animate-in fade-in slide-in-from-right-4 duration-500"
            >
              <FieldRenderer
                fields={currentSection.fields}
                register={register}
                errors={errors}
              />
            </div>
          </div>

          <FormNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrev={prevStep}
            onNext={nextStep}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>

      <FormResultModal
        status={modalStatus}
        message={modalMessage}
        onClose={handleCloseModal} // <-- Usamos la nueva función aquí
        onRetry={retryForm}
      />
    </div>
  );
};

export default FormSolicitudCredito;