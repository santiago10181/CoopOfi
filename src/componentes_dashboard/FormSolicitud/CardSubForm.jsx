// CardSubForm.jsx
import { useForm, FormProvider } from "react-hook-form";
import GeneralSolicitud from "../common/commonSubForm/SeccionsForm/GeneralSolicitud";
import InformacionSolicitante from "../common/commonSubForm/SeccionsForm/InformacionSolicitante";
import InfoComplementaria from "../common/commonSubForm/SeccionsForm/InfoComplementaria";
import InfoConyuge from "../common/commonSubForm/SeccionsForm/InfoConyuge";
import InfoLaboral from "../common/commonSubForm/SeccionsForm/InfoLaboral";
import InfoFinanciera from "../common/commonSubForm/SeccionsForm/InfoFinanciera";
import PatrimonioVehiculos from "../common/commonSubForm/SeccionsForm/PatrimonioVehiculos";
import PatrimonioInmueble from "../common/commonSubForm/SeccionsForm/PatrimonioInmueble";
import Referencias from "../common/commonSubForm/SeccionsForm/Referencias";
import OrigenFondos from "../common/commonSubForm/SeccionsForm/OrigenFondos";
import Soportes from "../common/commonSubForm/SeccionsForm/Soportes"
import TrataData from "../common/commonSubForm/SeccionsForm/TratamientoDatos"
import ButtonSendCS from "../common/commonSubForm/buttons/ButtonSendSC";



const CardSubForm = ({onClick}) => {
  // Inicializamos RHF
  const methods = useForm({
    defaultValues: {
      // Opcional: valores por defecto si los necesitas
    }
  });

  const onSubmit = (data) => {
    console.log("JSON Final para enviar al backend:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} >
        
        <GeneralSolicitud />
        <InformacionSolicitante />
        <InfoComplementaria />
        <InfoLaboral />
        <InfoFinanciera />
        <PatrimonioInmueble />
        <PatrimonioVehiculos />
        <Referencias />
        <InfoConyuge />    
        <OrigenFondos />
        <Soportes />
        <TrataData />
        <ButtonSendCS onClick={onClick} />
      </form>
    </FormProvider>
  );
};

export default CardSubForm;
