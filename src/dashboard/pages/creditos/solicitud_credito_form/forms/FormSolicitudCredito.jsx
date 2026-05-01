// FormSolicitudCredito.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Index } from "../data/Index";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { FormResultModal } from "../../../components/FormResultModal";
import { SidebarSolicitud } from "./micro-components/SidebarSolicitud";
import { SectionHeader } from "./micro-components/SectionHeader";
import { FieldRenderer } from "./micro-components/FieldRenderer";
import { FormNavigation } from "./micro-components/FormNavigation";
import { useAutoFillFormFromUser } from "../../hooks/useAutoFillFormFromUser";

const FormSolicitudCredito = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange", shouldUnregister: false });

  // ✅ Usamos el hook para el auto‑llenado
  useAutoFillFormFromUser(reset, Index);

  const { onSubmit, modalStatus, modalMessage, closeModal, retryForm } =
    useSubmitForm();

  const totalSteps = Index.length;
  const currentSection = Index[currentStep];

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

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
        onClose={closeModal}
        onRetry={retryForm}
      />
    </div>
  );
};

export default FormSolicitudCredito;
