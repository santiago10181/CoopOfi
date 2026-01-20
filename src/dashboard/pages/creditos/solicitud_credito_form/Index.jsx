import { LayoutForms } from "../../components/LayoutForms";
import { FormSolicitudCredito } from "./forms/FormSolicitudCredito";

const FormComplete = () => {
  return (
    <>
      <LayoutForms
        title="Solicitud de Crédito"
        description="Completa el formulario para solicitar tu crédito"
      >
        <FormSolicitudCredito />
      </LayoutForms>
    </>
    );
};
export default FormComplete;
