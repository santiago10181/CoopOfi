import { InputForm }         from '../../../../components/InputForm';
import { SelectForm }        from '../../../../components/SelectForm';
import { InputFileForm }     from '../../../../components/InputFileForm';
import { OrigenFondosField } from '../../extra_components/OrigenFondosField';
import { SectionDivider }    from './SectionDivider';

export const FieldRenderer = ({ fields, register, errors }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
    {fields.map((field, idx) => {

      if (field.componentType === 'divider')
        return <SectionDivider key={`div-${idx}`} title={field.label} />;

      const { componentType, rules, ...fieldProps } = field;
      const commonProps = {
        ...fieldProps,
        register: (name) => register(name, rules),
        error: errors[field.name],
      };

      if (field.name === 'sol_origen_fondos')
        return (
          <OrigenFondosField key={field.name}>
            <InputForm {...commonProps} label="" />
          </OrigenFondosField>
        );

      if (componentType === 'select') return <SelectForm    key={field.name} {...commonProps} />;
      if (field.type    === 'file')   return <InputFileForm key={field.name} {...commonProps} />;
      return                                 <InputForm     key={field.name} {...commonProps} />;
    })}
  </div>
);
