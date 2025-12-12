// GeneralSOlicitud.jsx
import TitleSubForm from "../elementsSubForm/SubCardForm";
import SelectOptions from "../elementsSubForm/SelectsOption"; // Importa el refactorizado
import InputNum from "../elementsSubForm/InputValue"; // O InputValue refactorizado
import DataPatrimonioVehiculos from "../dataSeccion/DataPatrimonioVehiculos";

const PatrimonioVehiculos = () => {
  return (
    <div className="border border-slate-200 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <TitleSubForm
        Value="Patrimonio Vehiculos"
        className="text-xl font-semibold text-slate-800 md:col-span-2 lg:col-span-3"
      />
      
      {DataPatrimonioVehiculos.fields.map((item, index) => {
        // Usamos item.NameInputNum como 'name' único para el form
        const name = item.NameInputNum;

        if (item.isSelect) {
          const options =
            item.NameInputNum === "Pignorado"
              ? DataPatrimonioVehiculos.optionsPignorado
              : null

          return (
            <SelectOptions
              key={name ?? index}
              name={name}
              label={item.NameInputNum}
              options={options}
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

export default PatrimonioVehiculos;
