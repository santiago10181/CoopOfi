// InfoComplementaria.jsx
import { useFormContext } from "react-hook-form";
import TitleSubForm from "../elementsSubForm/SubCardForm";
import InputNum from "../elementsSubForm/InputValue";
import SelectOptions from "../elementsSubForm/SelectsOption";
import DataInfoComplementaria from "../dataSeccion/DataInfoComplementaria";

const InfoComplementaria = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className=" border border-slate-200 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <TitleSubForm Value="Información Complementaria" />

      {DataInfoComplementaria.fields.map((item, index) => {
        const name = item.NameInputNum;
        const error = errors?.[name]?.message;

        if (item.isSelect) {
          return (
            <SelectOptions
              key={name ?? index}
              name={name}
              label={item.NameInputNum}
              options={item.options}
              register={register}
              error={error}
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
            register={register}
            error={error}
          />
        );
      })}
    </div>
  );
};

export default InfoComplementaria;
