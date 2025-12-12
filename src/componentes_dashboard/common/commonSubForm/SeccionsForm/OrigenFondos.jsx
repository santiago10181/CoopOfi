// GeneralSOlicitud.jsx
import TitleSubForm from "../elementsSubForm/SubCardForm";
import InputNum from "../elementsSubForm/InputValue"; // O InputValue refactorizado
import DataOrigenFondos from "../dataSeccion/DataOrigenFondos";

const OrigenFondos = () => {
  return (
    <div className="flex flex-col border border-slate-200 p-6 rounded-lg gap-2 mb-8">
      <TitleSubForm
        Value="Declaración de origen de fondos"
        className="text-xl font-semibold text-slate-800 md:col-span-2 lg:col-span-3"
      />
      <p className="text-slate-700 text-sm">1. Los recursos que poseo provienen de las siguientes fuentes (detalle ocupación, oficio, actividad o negocio):</p>
      <p className="text-slate-700 text-sm">2. Tanto mi actividad, profesión u oficio es lícita y la ejerzo dentro del marco legal y los recursos que poseo no provienen de actividades ilícitas de las contempladas en el Código Penal Colombiano. 3. La información que he suministrado en la solicitud y en este documento es veraz y verificable y me obligo a actualizarla anualmente; asi mismo, autorizo para que se realice la verificación de la misma ante las entidades competentes.</p>
      <p className="text-slate-700 text-sm">3. Los recursos que se deriven del desarrollo de este contrato no se destinarán para lavado de activos y fianciación del terrorismo</p>
      {DataOrigenFondos.fields.map((item, index) => {
        // Usamos item.NameInputNum como 'name' único para el form
        const name = item.NameInputNum
        return (
          <InputNum
            key={name ?? index}
            name={name}
            label={item.NameInputNum}
            type={item.type}
            placeholder={item.placeholder}
          />
        );
      })}
    </div>
  );
};

export default OrigenFondos;
