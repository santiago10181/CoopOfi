import { LayoutForms } from "../../components/LayoutForms";
import { lazy, Suspense } from "react";
import { PageLoader } from "../../components/PageLoader";

const FormSolicitudCredito = lazy(() => import("./forms/FormSolicitudCredito"));

const FormComplete = () => {
  return (
    // ← Ya no necesita title ni description, se manejan adentro
    <LayoutForms>
      <Suspense fallback={<PageLoader />}>
        <FormSolicitudCredito />
      </Suspense>
    </LayoutForms>
  );
};

export default FormComplete;
