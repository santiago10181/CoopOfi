import { LayoutForms } from "../../components/LayoutForms";
import { lazy, Suspense } from "react";
import { PageLoader } from "../../components/PageLoader"; // Sin espacios extra

const FormSolicitudCredito = lazy(() => import("./forms/FormSolicitudCredito"));

const FormComplete = () => {
  return (
    <LayoutForms
      title="Solicitud de Crédito"
      description="Completa el formulario para solicitar tu crédito"
    >
      <Suspense fallback={<PageLoader />}>
        <FormSolicitudCredito />
      </Suspense>
    </LayoutForms>
  );
};

export default FormComplete;
