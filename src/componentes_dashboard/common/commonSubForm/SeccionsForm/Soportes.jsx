// GeneralSOlicitud.jsx
import TitleSubForm from "../elementsSubForm/SubCardForm";
import InputSoportes from "../elementsSubForm/InputSoportes"; // Importa el refactorizado


const OrigenFondos = () => {
  return (
    <div className="flex flex-col border p-6 border-slate-200 rounded-lg gap-2 mb-8">
      <TitleSubForm
        Value="Archivos adjuntos"
        className="text-xl font-semibold text-slate-800 md:col-span-2 lg:col-span-3"
      />
      <InputSoportes    />
      
    </div>
  );
};

export default OrigenFondos;
