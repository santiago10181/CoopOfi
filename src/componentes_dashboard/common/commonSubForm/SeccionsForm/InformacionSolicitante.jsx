// InformacionSolicitante.jsx
import TitleSubForm from "../elementsSubForm/SubCardForm";
import SelectOptions from "../elementsSubForm/SelectsOption";
import InputNum from "../elementsSubForm/InputValue";
import DataInformacionSolicitante from "../dataSeccion/DataInformacionSolicitante";

const InformacionSolicitante = () => {
  const tipoDocumentoOptions = [
    "Cedula de Ciudadania",
    "Cedula de Extranjeria",
    "Pasaporte"
  ];

  return (
    <div className="border border-slate-200 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <TitleSubForm
        Value="Información del solicitante"
        className="text-xl font-semibold text-slate-800 md:col-span-2 lg:col-span-3"
      />

      {DataInformacionSolicitante.fields.map((item, index) => {
        const name = item.NameInputNum;

        if (item.isSelect) {
          return (
            <SelectOptions
              key={name ?? index}
              name={name}
              label={item.NameInputNum}
              options={tipoDocumentoOptions}
            />
          );
        }

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

export default InformacionSolicitante;
