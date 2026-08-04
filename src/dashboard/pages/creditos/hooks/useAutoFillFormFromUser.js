import { useEffect } from "react";
import { useDataUser } from "./useDataFill"; 

export const useAutoFillFormFromUser = (reset, index) => {
  const { userData, loading, error } = useDataUser();

  useEffect(() => {
    if (!userData || !reset || !index) return;

    // 1. Extraer nombres de campos válidos del index
    const validFormFields = index
      .flatMap((section) => section.fields)
      .filter((field) => field.componentType !== "divider" && field.name)
      .map((field) => field.name);

    // 2. Mapear valores
    const valuesToInject = {};
    validFormFields.forEach((fieldName) => {
      if (userData.hasOwnProperty(fieldName)) {
        valuesToInject[fieldName] = userData[fieldName];
      }
    });

    // 3. Inyectar en el formulario
    reset(valuesToInject);

  }, [userData, index, reset]);

  // Devolvemos userData para que el componente padre pueda usar las opciones (lineasCredito)
  return { loading, error, userData }; 
};